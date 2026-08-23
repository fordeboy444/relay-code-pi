// Lazy-env config. Required vars use memo(() => required("X")) so the
// Trigger.dev build step (which runs without process.env) doesn't crash on
// import. Add more vars with the `relay_add_env_var` tool — never hand-edit.
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

export const config = {
  get triggerSecretKey(): string { return _triggerSecretKey(); },
};