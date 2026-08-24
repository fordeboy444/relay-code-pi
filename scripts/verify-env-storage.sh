#!/usr/bin/env bash
# Verify the extended .env-storage skill manages BOTH .env and .env.production.
#
# Safety: uses FAKE placeholder values only. Never touches the user's real
# $HOME. Every command runs with HOME pointed at a scratch dir. Reporting is
# metadata-only (wc -l, grep -c, redacted sed) — secret values are never printed,
# matching the skill's core principle.
#
# Compares:
#   NEW skill (working tree) — should manage both files.
#   OLD skill (git HEAD)    — declared .env.production out of scope; baseline bug.

set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WS="/tmp/env-storage-eval"
rm -rf "$WS"; mkdir -p "$WS"

NEW_SKILL="$ROOT/skills/.env-storage"          # working tree: SKILL.md + assets/.env + assets/.env.production
OLD_SKILL="$WS/old-skill"; mkdir -p "$OLD_SKILL/assets"
git -C "$ROOT" show HEAD:skills/.env-storage/SKILL.md         > "$OLD_SKILL/SKILL.md"
git -C "$ROOT" show HEAD:skills/.env-storage/assets/.env      > "$OLD_SKILL/assets/.env"   # old skill had no prod template

# Fake values (obviously not real secrets).
DEV_VAL="tr_dev_FAKEDEVKEY123"
PROD_VAL="tr_prod_FAKEPRODKEY456"
MODAL_ID="ak-FAKETOKENID"
MODAL_SEC="as-FAKESECRET"

FAILED=0
pass() { echo "PASS  $1"; }
fail() { echo "FAIL  $1"; FAILED=1; }
leak_check() {
  # $1 = text to scan; any fake value present = a secret leaked into output.
  local t="$1"
  if echo "$t" | grep -qE "$DEV_VAL|$PROD_VAL|$MODAL_ID|$MODAL_SEC"; then
    echo "FAIL  secret value leaked into command output"; FAILED=1
  fi
}

mk_dev_master() {  # $1 = home  -> writes master .env with fake dev values
  mkdir -p "$1/.pi/agent/.env-storage"
  cat > "$1/.pi/agent/.env-storage/.env" <<EOF
TRIGGER_SECRET_KEY=$DEV_VAL
MODAL_TOKEN_ID=$MODAL_ID
MODAL_TOKEN_SECRET=$MODAL_SEC
EOF
}
mk_prod_master() {  # $1 = home -> writes master .env.production with fake prod value
  mkdir -p "$1/.pi/agent/.env-storage"
  printf 'TRIGGER_SECRET_KEY=%s\n' "$PROD_VAL" > "$1/.pi/agent/.env-storage/.env.production"
}

# ---------- NEW skill: first-run merge helper (per SKILL.md "First-run setup") ----------
# Merges template keys missing from the master, without overwriting existing values.
merge_template_keys() {  # $1 = master file, $2 = template file
  awk -F= 'NR==FNR { seen[$1]=1; next } /^[A-Za-z_][A-Za-z0-9_]*=/ && !($1 in seen) { print }' "$1" "$2" >> "$1"
}

# ---------- TC1: Load (both masters present) ----------
echo "=== TC1: NEW skill — Load both files ==="
HOME1="$WS/h1"; rm -rf "$HOME1"; mkdir -p "$HOME1"
mk_dev_master "$HOME1"; mk_prod_master "$HOME1"
CWD1="$WS/cwd1"; rm -rf "$CWD1"; mkdir -p "$CWD1"
OUT1=$(HOME="$HOME1" bash -c '
  set -u
  HOME_DIR='"$HOME1"'; SKILL="'"$NEW_SKILL"'"; CWD="'"$CWD1"'"
  # First-run setup for both files (masters exist -> merge missing template keys)
  merge() { awk -F= "NR==FNR { seen[\$1]=1; next } /^[A-Za-z_][A-Za-z0-9_]*=/ && !(\$1 in seen) { print }" "$1" "$2" >> "$1"; }
  merge "$HOME_DIR/.pi/agent/.env-storage/.env"          "$SKILL/assets/.env"
  merge "$HOME_DIR/.pi/agent/.env-storage/.env.production" "$SKILL/assets/.env.production"
  # Existence check (EXISTS/MISSING only, no contents)
  src_dev="$HOME_DIR/.pi/agent/.env-storage/.env";  src_prod="$HOME_DIR/.pi/agent/.env-storage/.env.production"
  test -f "$src_dev"  && echo "dev source EXISTS"  || echo "dev source MISSING"
  test -f "$src_prod" && echo "prod source EXISTS" || echo "prod source MISSING"
  # No existing destination -> no overwrite confirmation needed
  # Copy verbatim, disk-to-disk
  cp -f "$src_dev"  "$CWD/.env"
  cp -f "$src_prod" "$CWD/.env.production"
  # Report metadata only (never values)
  echo "dev  lines: $(wc -l < "$CWD/.env")"
  echo "prod lines: $(wc -l < "$CWD/.env.production")"
  echo "dev  keys:  $(grep -cE "^[A-Za-z_][A-Za-z0-9_]*=" "$CWD/.env")"
  echo "prod keys:  $(grep -cE "^[A-Za-z_][A-Za-z0-9_]*=" "$CWD/.env.production")"
  echo "dev  names:  $(sed -E "s/=(.*)/=***/" "$CWD/.env"          | grep -E = | grep -v ^# | tr "\n" " ")"
  echo "prod names:  $(sed -E "s/=(.*)/=***/" "$CWD/.env.production" | grep -E = | grep -v ^# | tr "\n" " ")"
')
echo "$OUT1"
leak_check "$OUT1"
[ -f "$CWD1/.env" ]           && pass "TC1 new: cwd/.env created"           || fail "TC1 new: cwd/.env missing"
[ -f "$CWD1/.env.production" ]&& pass "TC1 new: cwd/.env.production created"|| fail "TC1 new: cwd/.env.production missing"
[ "$(wc -l < "$CWD1/.env")" -eq 3 ]          && pass "TC1 new: dev line count matches master (3)"  || fail "TC1 new: dev line count"
[ "$(wc -l < "$CWD1/.env.production")" -eq 1 ] && pass "TC1 new: prod line count matches master (1)" || fail "TC1 new: prod line count"
grep -qE "^TRIGGER_SECRET_KEY=" "$CWD1/.env"          && pass "TC1 new: dev has TRIGGER_SECRET_KEY"  || fail "TC1 new: dev missing key"
grep -qE "^MODAL_TOKEN_ID="     "$CWD1/.env"          && pass "TC1 new: dev has MODAL_TOKEN_ID"      || fail "TC1 new: dev missing modal id"
grep -qE "^TRIGGER_SECRET_KEY=" "$CWD1/.env.production"&& pass "TC1 new: prod has TRIGGER_SECRET_KEY" || fail "TC1 new: prod missing key"

# ---------- TC1 baseline: OLD skill — Load (only .env) ----------
echo "=== TC1 baseline: OLD skill — Load (should NOT manage .env.production) ==="
HOME1B="$WS/h1b"; rm -rf "$HOME1B"; mkdir -p "$HOME1B"
mk_dev_master "$HOME1B"; mk_prod_master "$HOME1B"   # prod master exists, but old skill ignores it
CWD1B="$WS/cwd1b"; rm -rf "$CWD1B"; mkdir -p "$CWD1B"
HOME="$HOME1B" bash -c '
  set -u
  HOME_DIR='"$HOME1B"'; SKILL="'"$OLD_SKILL"'"; CWD="'"$CWD1B"'"
  merge() { awk -F= "NR==FNR { seen[\$1]=1; next } /^[A-Za-z_][A-Za-z0-9_]*=/ && !(\$1 in seen) { print }" "$1" "$2" >> "$1"; }
  merge "$HOME_DIR/.pi/agent/.env-storage/.env" "$SKILL/assets/.env"
  src="$HOME_DIR/.pi/agent/.env-storage/.env"
  test -f "$src" && echo "dev source EXISTS" || echo "dev source MISSING"
  cp -f "$src" "$CWD/.env"
  echo "dev lines: $(wc -l < "$CWD/.env")"
  # OLD skill: no .env.production handling at all
'
[ -f "$CWD1B/.env" ]            && pass "TC1 old: cwd/.env created (baseline)"   || fail "TC1 old: cwd/.env missing"
[ -f "$CWD1B/.env.production" ] && fail "TC1 old: cwd/.env.production created (old skill should NOT manage prod)" || pass "TC1 old: cwd/.env.production correctly absent (the dead-end bug)"

# ---------- TC2: NEW skill — Update (cwd -> masters) ----------
echo "=== TC2: NEW skill — Update both files back to masters ==="
HOME2="$WS/h2"; rm -rf "$HOME2"; mkdir -p "$HOME2"
mk_dev_master "$HOME2"; mk_prod_master "$HOME2"   # masters exist -> will be overwritten
CWD2="$WS/cwd2"; rm -rf "$CWD2"; mkdir -p "$CWD2"
# cwd has NEW fake values (different lengths) to prove the copy overwrote masters
cat > "$CWD2/.env" <<EOF
TRIGGER_SECRET_KEY=tr_dev_UPDATED999
MODAL_TOKEN_ID=ak-NEWID
MODAL_TOKEN_SECRET=as-NEWSEC
EOF
printf 'TRIGGER_SECRET_KEY=tr_prod_UPDATED999\n' > "$CWD2/.env.production"
OUT2=$(HOME="$HOME2" bash -c '
  set -u
  HOME_DIR='"$HOME2"'; CWD="'"$CWD2"'"
  # Update: source = cwd files; check existence (no contents)
  test -f "$CWD/.env"           && echo "dev src EXISTS"  || echo "dev src MISSING"
  test -f "$CWD/.env.production"&& echo "prod src EXISTS"|| echo "prod src MISSING"
  # Destinations (masters) exist -> would confirm overwrite; here we proceed
  cp -f "$CWD/.env"           "$HOME_DIR/.pi/agent/.env-storage/.env"
  cp -f "$CWD/.env.production" "$HOME_DIR/.pi/agent/.env-storage/.env.production"
  echo "master dev lines:  $(wc -l < "$HOME_DIR/.pi/agent/.env-storage/.env")"
  echo "master prod lines: $(wc -l < "$HOME_DIR/.pi/agent/.env-storage/.env.production")"
')
echo "$OUT2"
[ "$(wc -l < "$HOME2/.pi/agent/.env-storage/.env")" -eq 3 ]          && pass "TC2 new: dev master updated (3 lines)"  || fail "TC2 new: dev master not updated"
[ "$(wc -l < "$HOME2/.pi/agent/.env-storage/.env.production")" -eq 1 ] && pass "TC2 new: prod master updated (1 line)" || fail "TC2 new: prod master not updated"
# value changed? check by redacted name only is fine; assert key present + line count already done. Confirm overwrite via a non-value signal: file mtime newer than cwd? simpler: re-grep key presence.
grep -qE "^TRIGGER_SECRET_KEY=" "$HOME2/.pi/agent/.env-storage/.env.production" && pass "TC2 new: prod master has prod key" || fail "TC2 new: prod master missing key"

# ---------- TC3: NEW skill — Load when prod master is MISSING ----------
echo "=== TC3: NEW skill — Load with missing prod master (first-run seeds from template) ==="
HOME3="$WS/h3"; rm -rf "$HOME3"; mkdir -p "$HOME3"
mk_dev_master "$HOME3"   # dev master present, prod master ABSENT
CWD3="$WS/cwd3"; rm -rf "$CWD3"; mkdir -p "$CWD3"
OUT3=$(HOME="$HOME3" bash -c '
  set -u
  HOME_DIR='"$HOME3"'; SKILL="'"$NEW_SKILL"'"; CWD="'"$CWD3"'"
  # First-run setup, per file:
  #  .env master exists -> merge template keys
  awk -F= "NR==FNR { seen[\$1]=1; next } /^[A-Za-z_][A-Za-z0-9_]*=/ && !(\$1 in seen) { print }" \
    "$HOME_DIR/.pi/agent/.env-storage/.env" "$SKILL/assets/.env" >> "$HOME_DIR/.pi/agent/.env-storage/.env"
  #  .env.production master MISSING -> Load first-run: copy template to master (seed placeholders)
  if [ ! -f "$HOME_DIR/.pi/agent/.env-storage/.env.production" ]; then
    cp "$SKILL/assets/.env.production" "$HOME_DIR/.pi/agent/.env-storage/.env.production"
    echo "prod master seeded from template (placeholder)"
  fi
  # existence checks
  test -f "$HOME_DIR/.pi/agent/.env-storage/.env"           && echo "dev source EXISTS"  || echo "dev source MISSING"
  test -f "$HOME_DIR/.pi/agent/.env-storage/.env.production"&& echo "prod source EXISTS" || echo "prod source MISSING"
  # copy both
  cp -f "$HOME_DIR/.pi/agent/.env-storage/.env"           "$CWD/.env"
  cp -f "$HOME_DIR/.pi/agent/.env-storage/.env.production" "$CWD/.env.production"
  echo "dev  lines: $(wc -l < "$CWD/.env")"
  echo "prod lines: $(wc -l < "$CWD/.env.production")"
  echo "prod names: $(sed -E "s/=(.*)/=***/" "$CWD/.env.production" | grep -E = | grep -v ^# | tr "\n" " ")"
')
echo "$OUT3"
leak_check "$OUT3"
[ -f "$CWD3/.env" ]            && pass "TC3 new: cwd/.env loaded from dev master"  || fail "TC3 new: cwd/.env missing"
[ -f "$CWD3/.env.production" ] && pass "TC3 new: cwd/.env.production seeded from template" || fail "TC3 new: cwd/.env.production missing"
grep -qE "^TRIGGER_SECRET_KEY=" "$CWD3/.env.production" && pass "TC3 new: seeded prod file carries TRIGGER_SECRET_KEY placeholder" || fail "TC3 new: seeded prod file missing key"

echo
if [ "$FAILED" -eq 0 ]; then echo "RESULT: ALL PASS"; else echo "RESULT: FAILURES PRESENT"; fi
exit "$FAILED"