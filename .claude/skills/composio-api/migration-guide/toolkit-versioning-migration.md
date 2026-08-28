# Toolkit versioning migration

- **URL:** https://docs.composio.dev/migration-guide/toolkit-versioning
- **Summary:** Migrate to the new toolkit versioning system

Starting with Python SDK v0.9.0 and TypeScript SDK v0.2.0, manual tool execution requires explicit version specification. This is a breaking change from earlier versions where toolkit versioning was optional.

## Breaking change

Manual tool execution now requires explicit version specification. The `tools.execute()` method will fail without a version.

### Before (will fail)

  
```python
# Raises ToolVersionRequiredError
result = composio.tools.execute(
    "GITHUB_CREATE_ISSUE",
    {"user_id": "user-123", "arguments": {...}}
)
```
  
  
```typescript
// @noErrors
// Throws ComposioToolVersionRequiredError
const result = await composio.tools.execute({
    toolSlug: "GITHUB_CREATE_ISSUE",
    userId: "user-123",
    arguments: {...}
});
```
  

### After (required)

Choose one of three migration strategies:

#### Option 1: Configure version at SDK level

  
```python
from composio import Composio

# Pin specific versions for each toolkit
composio = Composio(
    api_key="YOUR_API_KEY",
    toolkit_versions={
        "github": "20251027_00",
        "slack": "20251027_00",
        "gmail": "20251027_00"
    }
)
```
  
  
```typescript
// @noErrors

// Pin specific versions for each toolkit
const composio = new Composio({
    apiKey: "YOUR_API_KEY",
    toolkitVersions: {
        github: "20251027_00",
        slack: "20251027_00",
        gmail: "20251027_00"
    }
});
```
  

#### Option 2: Pass version with each execution

  
```python
# Specify version directly in execute call
result = composio.tools.execute(
    "GITHUB_LIST_STARGAZERS",
    arguments={
        "owner": "ComposioHQ",
        "repo": "composio"
    },
    user_id="user-k7334",
    version="20251027_00"  # Override version for this execution
)
print(result)
```
  
  
```typescript
// @noErrors
// Specify version directly in execute call
const result = await composio.tools.execute("GITHUB_LIST_STARGAZERS", {
    userId: "user-k7334",
    arguments: {
        owner: "ComposioHQ",
        repo: "composio"
    },
    version: "20251027_00"  // Override version for this execution
});
console.log(result);
```
  

#### Option 3: Use environment variables

```bash
```

## Migration checklist

1. **Audit your code**: Find all `tools.execute()` calls in your codebase
2. **Choose a strategy**: Select one of the three options above based on your needs
3. **Test thoroughly**: Verify tools work correctly with pinned versions
4. **Deploy gradually**: Roll out changes incrementally to minimize risk

## Temporary workaround

During migration, you can temporarily skip version checks (not recommended for production):

  
```python
result = composio.tools.execute(
    "GITHUB_CREATE_ISSUE",
    {
        "user_id": "user-123",
        "arguments": {...}
    },
    dangerously_skip_version_check=True
)
```
  
  
```typescript
// @noErrors
const result = await composio.tools.execute({
    toolSlug: "GITHUB_CREATE_ISSUE",
    userId: "user-123",
    arguments: {...},
    dangerouslySkipVersionCheck: true
});
```
  

The `dangerouslySkipVersionCheck` flag is only for migration or debugging. Never use in production.

## Next

<Card icon={} title="Migrate to sessions" href="/docs/migration-guide/direct-to-sessions" description="Move from older tool execution patterns to sessions" />
