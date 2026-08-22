// Fixture: a byte-accurate copy of relay-code/src/config.ts.
// Pure cores transform this string; tests assert the exact lazy-env output.
function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

function memo<T>(fn: () => T): () => T {
  let cached: T | undefined;
  let resolved = false;
  return () => {
    if (resolved) return cached as T;
    cached = fn();
    resolved = true;
    return cached;
  };
}

const _triggerSecretKey = memo(() => required("TRIGGER_SECRET_KEY"));
const _airtableToken = memo(() => required("AIRTABLE_TOKEN"));

const _unipileApiBase = memo(() => required("UNIPILE_API_BASE"));
const _unipileApiKey = memo(() => required("UNIPILE_API_KEY"));

export const config = {
  get triggerSecretKey(): string { return _triggerSecretKey(); },
  get airtableToken(): string { return _airtableToken(); },
  get unipileApiBase(): string { return _unipileApiBase(); },
  get unipileApiKey(): string { return _unipileApiKey(); },
};

export function airtableAuthHeader(): string {
  return "Bearer " + config.airtableToken;
}

export function unipileApiKeyHeader(): string {
  return config.unipileApiKey;
}