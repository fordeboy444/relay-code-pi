import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

// Pure-core test: sweep every relay-* SKILL.md through a real YAML parser
// (js-yaml — the same parser the Pi harness uses to load skills). Catches the
// "Nested mappings are not allowed in compact mappings" bug class at the same
// layer the failure surfaces, instead of relying on the in-house regex
// frontmatterValue in src/cores.ts (which would happily match `description:`
// and grab the rest of the line, including a now-illegal nested scalar).

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..");
const skillsRoot = join(repoRoot, "skills");

function extractFrontmatter(src: string): string {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) throw new Error("no frontmatter (file is missing the leading `---` fence)");
  return m[1];
}

describe("relay-* SKILL.md frontmatter", () => {
  const relaySkills = readdirSync(skillsRoot)
    .filter((d) => d.startsWith("relay-") && statSync(join(skillsRoot, d)).isDirectory())
    .sort();

  it("ships at least one relay-* skill", () => {
    expect(relaySkills.length).toBeGreaterThan(0);
  });

  for (const skill of relaySkills) {
    describe(`${skill}/SKILL.md`, () => {
      const file = join(skillsRoot, skill, "SKILL.md");
      const fm = extractFrontmatter(readFileSync(file, "utf8"));

      it("parses with js-yaml (no nested-mapping / scalar errors)", () => {
        // The Pi harness calls js-yaml.load() on the frontmatter at skill
        // discovery; an unquoted scalar containing ": " would throw here.
        expect(() => yaml.load(fm)).not.toThrow();
      });

      it(`has name === "${skill}" and a non-empty string description`, () => {
        const parsed = yaml.load(fm) as Record<string, unknown>;
        expect(parsed).toBeTypeOf("object");
        expect(parsed.name).toBe(skill);
        expect(typeof parsed.description).toBe("string");
        expect((parsed.description as string).length).toBeGreaterThan(0);
      });
    });
  }
});
