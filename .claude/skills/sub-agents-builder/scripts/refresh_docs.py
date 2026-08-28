#!/usr/bin/env python3
"""Re-scrape Claude Code's agent/parallel-work docs into references/.

Fetches each page's Markdown variant (Mintlify serves clean markdown at <url>.md),
strips the leading "Documentation Index" callout Mintlify prepends to every page,
removes the remaining Mintlify website chrome (JSX component tags, version-gating
comments, unrenderable <img> diagram tags) so references/ holds only the page's main
content, SHA-256-hashes the result, and writes only pages whose content changed
since the last run. State lives in manifest.json next to SKILL.md.

Usage:
    python scripts/refresh_docs.py           # fetch + write changed pages
    python scripts/refresh_docs.py --check   # dry run: report changes, write nothing

Exit code: 0 if every page fetched OK, 1 if any page failed (unchanged/updated pages
are still written even when another page fails).

Paths resolve relative to this script's directory, so it runs from anywhere.
"""

import argparse
import hashlib
import json
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

# --- The pages this skill tracks -------------------------------------------------
# slug   -> local file stem; the live URL is https://code.claude.com/docs/en/<slug>
#           and its markdown variant is <that>.md
# title  -> human label used in the run report
PAGES = [
    {"slug": "agents", "title": "Run agents in parallel"},
    {"slug": "sub-agents", "title": "Create custom subagents"},
    {"slug": "agent-view", "title": "Manage agents with agent view"},
    {"slug": "agent-teams", "title": "Orchestrate agent teams"},
    {"slug": "workflows", "title": "Orchestrate dynamic workflows"},
    {"slug": "worktrees", "title": "Run parallel sessions with worktrees"},
]

BASE_URL = "https://code.claude.com/docs/en"
USER_AGENT = "claude-code-agents-skill-refresh/1.0"
SCRIPT_DIR = Path(__file__).resolve().parent
SKILL_DIR = SCRIPT_DIR.parent
REFERENCES_DIR = SKILL_DIR / "references"
MANIFEST_PATH = SKILL_DIR / "manifest.json"

# --- Helpers ---------------------------------------------------------------------


def now_iso() -> str:
    """Current UTC timestamp in ISO 8601 with a trailing Z."""
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def page_url(slug: str) -> str:
    return f"{BASE_URL}/{slug}.md"


def strip_leading_callout(text: str) -> str:
    """Remove the '> ## Documentation Index ...' blockquote Mintlify prepends to every page.

    Drops leading lines while they start with '>' (the callout blockquote) plus any
    immediately following blank lines, so the file begins at the page's real '# heading'.
    If there's no leading callout, returns the text unchanged.
    """
    lines = text.splitlines()
    i = 0
    while i < len(lines) and lines[i].lstrip().startswith(">"):
        i += 1
    while i < len(lines) and lines[i].strip() == "":
        i += 1
    return "\n".join(lines[i:]).lstrip("\n")


# --- Mintlify chrome removal ----------------------------------------------------
# Applied line-by-line OUTSIDE fenced code blocks only, so code samples are never
# mangled. All of these are Mintlify-specific; if a line doesn't match, it's left alone.
_RE_VERSION_COMMENT = re.compile(r"\{/\*.*?\*/\}")  # {/* min-version: x.y.z */}
_RE_IMG_LINE = re.compile(r"^\s*<img\b", re.IGNORECASE)  # whole line is an image tag
_RE_STEP_TITLE = re.compile(r'<Step\s+title="([^"]*)"\s*>')
_RE_TAB_TITLE = re.compile(r'<Tab\s+title="([^"]*)"\s*>')
# Component open/close tags to strip, keeping any inner text on the same line.
# <Frame ...> may carry attributes (caption=...), so allow attrs before >.
_RE_COMPONENT_TAG = re.compile(
    r"</?(?:Note|Warning|Tip|Steps|Tabs|Step|Tab|Frame)"  # tag name
    r"(?:\s[^>]*)?"  # optional attributes
    r"/?>",
    re.IGNORECASE,
)


def clean_markdown(text: str) -> str:
    """Strip Mintlify website chrome so references/ holds only the page's main content.

    Preserves all real text — including the body of <Note>/<Warning>/<Tip> callouts, which
    carries genuine guidance — and only removes the wrappers, the {/* min-version */} version
    gates, and unrenderable <img> diagram tags. <Step title>/<Tab title> become markdown
    headings so the page's structure survives the conversion.
    """
    out = []
    in_fence = False
    fence_char = ""
    for line in text.splitlines():
        stripped = line.lstrip()
        if not in_fence:
            m = re.match(r"^(`{3,}|~{3,})", stripped)
            if m:
                in_fence = True
                fence_char = m.group(1)[0]
                out.append(line)
                continue
        else:
            # A closing fence is the same marker repeated 3+ times, alone on the line.
            if re.match(rf"^{re.escape(fence_char)}{{3,}}\s*$", stripped):
                in_fence = False
                fence_char = ""
            out.append(line)
            continue

        # Outside a fence: clean the line.
        if _RE_IMG_LINE.match(line):  # drop pure image lines (huge CDN URLs, can't render)
            continue
        line = _RE_VERSION_COMMENT.sub("", line)  # remove {/* ... */} anywhere
        line = _RE_STEP_TITLE.sub(r"### \1", line)  # <Step title="X"> -> ### X
        line = _RE_TAB_TITLE.sub(r"#### \1", line)  # <Tab title="X">  -> #### X
        line = _RE_COMPONENT_TAG.sub("", line)  # strip component wrappers, keep inner text
        out.append(line)

    cleaned = "\n".join(out)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)  # collapse 3+ blank lines to one
    return cleaned.strip() + "\n"


def fetch(url: str) -> str:
    """GET url and return decoded text. Raises on non-200 or network error."""
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "text/markdown, text/plain, */*"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        if resp.status != 200:
            raise urllib.error.HTTPError(url, resp.status, f"HTTP {resp.status}", resp.headers, None)
        data = resp.read()
    return data.decode("utf-8", errors="replace")


def load_manifest() -> dict:
    if MANIFEST_PATH.exists():
        try:
            return json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            # Corrupt manifest: rebuild from scratch rather than crashing.
            return {}
    return {}


def save_manifest(manifest: dict) -> None:
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def pages_index(manifest: dict) -> dict:
    """Map slug -> page entry from the manifest, tolerant of missing 'pages'."""
    return {p["slug"]: p for p in manifest.get("pages", [])}


# --- Core run --------------------------------------------------------------------


def run(check_only: bool = False) -> int:
    REFERENCES_DIR.mkdir(parents=True, exist_ok=True)

    manifest = load_manifest()
    pages_by_slug = pages_index(manifest)

    # Initialize the stable top-level fields once, on first ever run.
    if "first_scraped" not in manifest:
        manifest["first_scraped"] = now_iso()
    manifest.setdefault("source_url", f"{BASE_URL}/agents")
    manifest.setdefault("skill_name", "claude-code-agents")
    manifest.setdefault("layout", "flat")
    manifest["page_count"] = len(PAGES)

    updated, unchanged, failed = [], [], []
    any_changed = False

    for page in PAGES:
        slug = page["slug"]
        title = page["title"]
        url = page_url(slug)
        dest = REFERENCES_DIR / f"{slug}.md"

        try:
            raw = fetch(url)
        except Exception as exc:  # network, HTTP, decode, ...
            failed.append((slug, title, str(exc)))
            print(f"  FAILED   {slug:12} {title}")
            print(f"           -> {exc}")
            continue

        content = clean_markdown(strip_leading_callout(raw))
        digest = hashlib.sha256(content.encode("utf-8")).hexdigest()
        prev = pages_by_slug.get(slug)
        prev_hash = prev.get("sha256") if prev else None

        if prev_hash == digest and dest.exists():
            unchanged.append((slug, title))
            print(f"  unchanged {slug:12} {title}")
            continue

        # Changed or new.
        any_changed = True
        print(f"  UPDATED  {slug:12} {title}")
        if check_only:
            updated.append((slug, title))
            continue

        dest.write_text(content if content.endswith("\n") else content + "\n", encoding="utf-8")
        updated.append((slug, title))

        entry = pages_by_slug.get(slug) or {"slug": slug}
        entry["slug"] = slug
        entry["url"] = url
        entry["file"] = f"references/{slug}.md"
        entry["sha256"] = digest
        entry["last_updated"] = now_iso()
        pages_by_slug[slug] = entry

    # Rebuild pages list in PAGES order so the manifest reads top-to-bottom.
    manifest["pages"] = [pages_by_slug[p["slug"]] for p in PAGES if p["slug"] in pages_by_slug]

    if any_changed and not check_only:
        manifest["last_updated"] = now_iso()

    if not check_only:
        save_manifest(manifest)

    mode = "[dry-run] " if check_only else ""
    print(
        f"\n{mode}updated: {len(updated)}, unchanged: {len(unchanged)}, failed: {len(failed)}"
    )
    return 1 if failed else 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Re-scrape Claude Code agent docs into references/.")
    parser.add_argument("--check", action="store_true", help="dry run: report changes without writing files or updating manifest")
    args = parser.parse_args()
    return run(check_only=args.check)


if __name__ == "__main__":
    sys.exit(main())