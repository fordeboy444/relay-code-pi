# Kubernetes

> Source: https://trigger.dev/docs/self-hosting/kubernetes

The following instructions will help you deploy Trigger.dev to Kubernetes using our official Helm chart. Make sure to read the self-hosting [overview](https://trigger.dev/docs/self-hosting/overview)
 first. As self-hosted deployments tend to have unique requirements and configurations, we don’t provide specific advice for securing your deployment, scaling up, or improving reliability. Should the burden ever get too much, we’d be happy to see you on [Trigger.dev cloud](https://trigger.dev/pricing)
 where we deal with these concerns for you. **Warning:** This guide alone is unlikely to result in a production-ready deployment. Security, scaling, and reliability concerns are not fully addressed here.

[​](https://trigger.dev/docs/self-hosting/kubernetes#requirements)

Requirements
----------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#prerequisites)

Prerequisites

*   Kubernetes cluster 1.19+
*   Helm 3.8+
*   Kubectl with cluster access

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#resources)

Resources

The following are minimum requirements for running the entire stack on Kubernetes: **Cluster resources:**

*   6+ vCPU total
*   12+ GB RAM total
*   Persistent volume support

**Individual components:**

*   **Webapp**: 1 vCPU, 2 GB RAM
*   **Supervisor**: 1 vCPU, 1 GB RAM
*   **PostgreSQL**: 1 vCPU, 2 GB RAM
*   **Redis**: 0.5 vCPU, 1 GB RAM
*   **ClickHouse**: 1 vCPU, 2 GB RAM
*   **Object Storage**: 0.5 vCPU, 1 GB RAM
*   **Workers**: Depending on concurrency and machine preset

These requirements scale based on your task concurrency and can be adjusted via the `resources` section in your `values.yaml`. For example:

    webapp:
      resources:
        requests:
          cpu: 500m
          memory: 1Gi
        limits:
          cpu: 2000m
          memory: 4Gi
    

[​](https://trigger.dev/docs/self-hosting/kubernetes#installation)

Installation
----------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#quick-start)

Quick start

1.  Install with default values (for testing only):

    helm upgrade -n trigger --install trigger \
      oci://ghcr.io/triggerdotdev/charts/trigger \
      --version "~4.0.0" \
      --create-namespace
    

2.  Access the webapp:

    kubectl port-forward svc/trigger-webapp 3040:3030 -n trigger
    

3.  Open the dashboard: `http://localhost:3040`
4.  Login with the magic link:

    # Check the webapp logs
    kubectl logs -n trigger deployment/trigger-webapp | grep -A1 "magic link"
    

[​](https://trigger.dev/docs/self-hosting/kubernetes#configuration)

Configuration
------------------------------------------------------------------------------------

Most values map directly to the environment variables documented in the [webapp](https://trigger.dev/docs/self-hosting/env/webapp)
 and [supervisor](https://trigger.dev/docs/self-hosting/env/supervisor)
 environment variable overview. **Naming convention:**

*   Environment variables use `UPPER_SNAKE_CASE`
*   Helm values use `camelCase`

**Example mapping:**

    # Environment variable
    APP_ORIGIN=https://trigger.example.com
    
    # Becomes Helm value
    config:
      appOrigin: "https://trigger.example.com"
    

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#default-values)

Default values

The following commands will display the default values:

    # Specific version
    helm show values oci://ghcr.io/triggerdotdev/charts/trigger \
      --version "4.0.5"
    
    # Latest v4
    helm show values oci://ghcr.io/triggerdotdev/charts/trigger \
      --version "~4.0.0"
    

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#custom-values)

Custom values

The default values are insecure and are only suitable for testing. You will need to configure your own secrets as a bare minimum. Create a `values-custom.yaml` file to override the defaults. For example:

    # Generate new secrets with `openssl rand -hex 16`
    # WARNING: You should probably use an existingSecret instead
    secrets:
      enabled: true
      sessionSecret: "your-32-char-hex-secret-1"
      magicLinkSecret: "your-32-char-hex-secret-2"
      # ...
    
    # Recommended: existingSecret, must contain at least the following keys:
    # - SESSION_SECRET
    # - MAGIC_LINK_SECRET
    # - ENCRYPTION_KEY
    # - MANAGED_WORKER_SECRET
    # - OBJECT_STORE_ACCESS_KEY_ID
    # - OBJECT_STORE_SECRET_ACCESS_KEY
    secrets:
      enabled: false
      existingSecret: "your-existing-secret"
    
    # Application URLs
    config:
      appOrigin: "https://trigger.example.com"
      loginOrigin: "https://trigger.example.com"
      apiOrigin: "https://trigger.example.com"
    
    # Resource limits
    webapp:
      resources:
        requests:
          cpu: 1000m
          memory: 2Gi
        limits:
          cpu: 2000m
          memory: 4Gi
    
    supervisor:
      resources:
        requests:
          cpu: 200m
          memory: 512Mi
        limits:
          cpu: 1000m
          memory: 2Gi
    

Deploy with your custom values:

    helm upgrade -n trigger --install trigger \
      oci://ghcr.io/triggerdotdev/charts/trigger \
      --version "~4.0.0" \
      --create-namespace \
      -f values-custom.yaml
    

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#extra-env)

Extra env

You can set extra environment variables on all services. For example:

    webapp:
      extraEnvVars:
        - name: EXTRA_ENV_VAR
          value: "extra-value"
    

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#extra-annotations)

Extra annotations

You can set extra annotations on all services. For example:

    webapp:
      podAnnotations:
        "my-annotation": "my-value"
    

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#external-services)

External services

You can disable the built-in services and use external services instead. The chart supports both direct configuration and existing Kubernetes secrets for secure credential management.

#### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#postgresql)

PostgreSQL

**Direct configuration:**

    postgres:
      deploy: false
      external:
        databaseUrl: "postgresql://user:password@host:5432/database?schema=public"
        directUrl: "" # Optional, defaults to databaseUrl
    

**Using existing secrets (recommended):**

    postgres:
      deploy: false
      external:
        existingSecret: "postgres-credentials"
        # Optional: Use secretKeys to specify the key names in the secret
        # secretKeys:
        #   databaseUrlKey: "postgres-database-url" # default
        #   directUrlKey: "postgres-direct-url"     # default
    

#### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#redis)

Redis

**Direct configuration:**

    redis:
      deploy: false
      external:
        host: "my-redis.example.com"
        port: 6379
        password: "my-password"
        tls:
          enabled: true
    

**Using existing secrets (recommended):**

    redis:
      deploy: false
      external:
        host: "my-redis.example.com"
        port: 6379
        existingSecret: "redis-credentials"
        # existingSecretPasswordKey: "redis-password" # default (optional)
        tls:
          enabled: true
    

#### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#clickhouse)

ClickHouse

**Direct configuration:**

    clickhouse:
      deploy: false
      external:
        host: "my-clickhouse.example.com"
        port: 8123
        username: "my-username"
        password: "my-password"
    

**Using existing secrets (recommended):**

    clickhouse:
      deploy: false
      external:
        host: "my-clickhouse.example.com"
        port: 8123
        username: "my-username"
        existingSecret: "clickhouse-credentials"
        # existingSecretKey: "clickhouse-password" # default (optional)
    

#### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#s3-object-storage)

S3 Object Storage

**Direct configuration:**

    minio:
      deploy: false
    s3:
      external:
        endpoint: "https://s3.amazonaws.com"
        accessKeyId: "my-access-key"
        secretAccessKey: "my-secret-key"
    

**Using existing secrets (recommended):**

    minio:
      deploy: false
    s3:
      external:
        endpoint: "https://s3.amazonaws.com"
        existingSecret: "s3-credentials"
        # Optional: Use secretKeys to specify the key names in the secret
        # secretKeys:
        #   accessKeyIdKey: "access-key-id"     # default
        #   secretAccessKeyKey: "secret-access-key" # default
    

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#postgresql-ssl-with-custom-ca-certificates)

PostgreSQL SSL with custom CA certificates

When connecting to PostgreSQL instances that require custom CA certificates (such as AWS RDS with SSL verification), you can mount the CA certificate as a volume and configure the webapp to use it:

    postgres:
      deploy: false
      external:
        databaseUrl: "postgresql://user:password@mydb.example.com:5432/triggerdb?schema=public&sslmode=require"
        # Alternatively, use an existing secret
        existingSecret: "postgres-credentials"
        # secretKeys:
        #   databaseUrlKey: "postgres-database-url" # default
      connection:
        sslMode: "require"
    
    # Webapp configuration with SSL CA certificate
    webapp:
      extraEnvVars:
        - name: NODE_EXTRA_CA_CERTS
          value: "/etc/ssl/certs/postgres-ca.crt"
    
      extraVolumes:
        - name: postgres-ca-cert
          secret:
            secretName: postgres-ca-secret
            items:
              - key: ca.crt
                path: postgres-ca.crt
    
      extraVolumeMounts:
        - name: postgres-ca-cert
          mountPath: /etc/ssl/certs
          readOnly: true
    

**Benefits:**

*   No plaintext credentials in `values.yaml` or Helm releases
*   Complete `DATABASE_URL` stored securely in Kubernetes secrets
*   Compatible with secret management tools (External Secrets Operator, etc.)
*   Follows Kubernetes security best practices

[​](https://trigger.dev/docs/self-hosting/kubernetes#dns-performance)

DNS performance
----------------------------------------------------------------------------------------

For production clusters we recommend deploying [NodeLocal DNSCache](https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/)
. DNS queries — especially to managed Postgres or Redis endpoints — can be very slow under Kubernetes’ default resolver, and a node-local cache typically gives a large step change in latency and throughput across the cluster. The default `ndots: 5` setting also forces every cluster search domain to be tried before resolving hostnames with fewer dots (the case for most external database hosts). Lowering `ndots` to `1` on the webapp and supervisor pods avoids those extra round-trips.

[​](https://trigger.dev/docs/self-hosting/kubernetes#task-events)

Task events
--------------------------------------------------------------------------------

By default, task events (timeline, logs, spans) are stored in PostgreSQL. For production deployments we recommend storing them in ClickHouse instead, it scales to much higher volumes and avoids unbounded growth of the `TaskEvent` table. ClickHouse is already deployed by the chart, so no extra services are required. To enable, set `EVENT_REPOSITORY_DEFAULT_STORE` on the webapp via `extraEnvVars`:

    webapp:
      extraEnvVars:
        - name: EVENT_REPOSITORY_DEFAULT_STORE
          value: "clickhouse_v2"
    

This only affects new runs; existing runs continue to read from wherever their events were originally stored.

[​](https://trigger.dev/docs/self-hosting/kubernetes#worker-token)

Worker token
----------------------------------------------------------------------------------

When using the default bootstrap configuration, worker creation and authentication is handled automatically. The webapp generates a worker token and makes it available to the supervisor via a shared volume.

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#bootstrap-default)

Bootstrap (default)

    webapp:
      bootstrap:
        enabled: true
        workerGroupName: "bootstrap"
    

### 

[​](https://trigger.dev/docs/self-hosting/kubernetes#manual)

Manual

If you need to set up workers separately or use a custom token:

1.  Get the worker token from the webapp logs:

    kubectl logs deployment/trigger-webapp -n trigger | grep -A15 "Worker Token"
    

2.  Create a secret with the token:

    kubectl create secret generic worker-token \
      --from-literal=token=tr_wgt_your_token_here \
      -n trigger
    

3.  Configure the supervisor to use the secret:

    supervisor:
      bootstrap:
        enabled: false
        workerToken:
          secret:
            name: "worker-token"
            key: "token"
    

[​](https://trigger.dev/docs/self-hosting/kubernetes#registry-setup)

Registry setup
--------------------------------------------------------------------------------------

See the [Docker registry setup](https://trigger.dev/docs/self-hosting/docker#registry-setup)
 for conceptual information. The configuration is specified in your `values.yaml`:

    # Use external registry (recommended)
    registry:
      deploy: false
      # Part of deployment image ref, for example: your-registry.example.com/your-company/proj_123:20250625.1.prod
      repositoryNamespace: "your-company"
      external:
        host: "your-registry.example.com"
        port: 5000
        auth:
          enabled: true
          username: "your-username"
          password: "your-password"
    

The internal registry (`registry.external: false`) is experimental and requires proper TLS setup and additional cluster configuration. Use an external registry for production.

[​](https://trigger.dev/docs/self-hosting/kubernetes#object-storage)

Object storage
--------------------------------------------------------------------------------------

See the [Docker object storage setup](https://trigger.dev/docs/self-hosting/docker#object-storage)
 for conceptual information. The defaults will use built-in MinIO, but you can use an external S3-compatible storage. The configuration is specified in your `values.yaml`:

    # Use external S3-compatible storage
    minio:
      deploy: false
      external:
        url: "https://s3.amazonaws.com"
        # or: "https://your-minio.com:9000"
    
    # Configure credentials
    secrets:
      objectStore:
        accessKeyId: "admin"
        secretAccessKey: "very-safe-password"
    

[​](https://trigger.dev/docs/self-hosting/kubernetes#authentication)

Authentication
--------------------------------------------------------------------------------------

Authentication options are identical to the [Docker-based installation](https://trigger.dev/docs/self-hosting/docker#authentication)
. The configuration is specified in your `values.yaml`: **GitHub OAuth:**

    webapp:
      extraEnvVars:
        - name: AUTH_GITHUB_CLIENT_ID
          value: "your-github-client-id"
        - name: AUTH_GITHUB_CLIENT_SECRET
          value: "your-github-client-secret"
    

**Email authentication (Resend):**

    webapp:
      extraEnvVars:
        - name: EMAIL_TRANSPORT
          value: "resend"
        - name: FROM_EMAIL
          value: "noreply@yourdomain.com"
        - name: REPLY_TO_EMAIL
          value: "support@yourdomain.com"
        - name: RESEND_API_KEY
          value: "your-resend-api-key"
    

**Restricting access:**

    webapp:
      extraEnvVars:
        - name: WHITELISTED_EMAILS
          value: "^(user1@company\\.com|user2@company\\.com)$"
    

[​](https://trigger.dev/docs/self-hosting/kubernetes#version-locking)

Version locking
----------------------------------------------------------------------------------------

You can lock versions in two ways: **Helm chart version (recommended):**

    # Pin to a specific version for production
    helm upgrade -n trigger --install trigger \
      oci://ghcr.io/triggerdotdev/charts/trigger \
      --version "4.0.5"
    
    # The app version will be different from the chart version
    # This is the version of the Trigger.dev webapp and supervisor
    # ..and should always match your Trigger.dev CLI version
    helm show chart \
      oci://ghcr.io/triggerdotdev/charts/trigger \
      --version "4.0.5" | grep appVersion
    

**Specific image tags:**

    webapp:
      image:
        tag: "v4.0.0"
    
    supervisor:
      image:
        tag: "v4.0.0"
    

The chart version’s `appVersion` field determines the default image tags. Newer image tags may be incompatible with older chart versions and vice versa.

[​](https://trigger.dev/docs/self-hosting/kubernetes#troubleshooting)

Troubleshooting
----------------------------------------------------------------------------------------

**Check logs:**

    # Webapp logs
    kubectl logs deployment/trigger-webapp -n trigger -f
    
    # Supervisor logs
    kubectl logs deployment/trigger-supervisor -n trigger -f
    
    # All pods
    kubectl logs -l app.kubernetes.io/instance=trigger -n trigger -f
    

**Check pod status:**

    kubectl get pods -n trigger
    kubectl describe pod <pod-name> -n trigger
    

**Start from scratch:**

    # Delete the release
    helm uninstall trigger -n trigger
    
    # Delete persistent volumes (optional)
    # WARNING: This will delete all your data!
    kubectl delete pvc -l app.kubernetes.io/instance=trigger -n trigger
    
    # Delete the namespace (optional)
    kubectl delete namespace trigger
    

**Common issues:**

*   **Magic links not working**: Check webapp logs for email delivery errors
*   **Deploy fails**: Verify registry access and authentication
*   **Pods stuck pending**: Describe the pod and check the events
*   **Worker token issues**: Check webapp and supervisor logs for errors
*   **Deploy fails with `ERROR: schema "graphile_worker" does not exist`**: See the [Docker troubleshooting](https://trigger.dev/docs/self-hosting/docker#troubleshooting)
     section for details on resolving PostgreSQL SSL certificate issues that prevent Graphile Worker migrations.

See the [Docker troubleshooting](https://trigger.dev/docs/self-hosting/docker#troubleshooting)
 section for more information.

[​](https://trigger.dev/docs/self-hosting/kubernetes#cli-usage)

CLI usage
----------------------------------------------------------------------------

See the [Docker CLI usage](https://trigger.dev/docs/self-hosting/docker#cli-usage)
 section, the commands are identical regardless of deployment method.

[​](https://trigger.dev/docs/self-hosting/kubernetes#ci-/-github-actions)

CI / GitHub Actions
------------------------------------------------------------------------------------------------

When running the CLI in a CI environment, your login profiles won’t be available. Instead, you can use the `TRIGGER_API_URL` and `TRIGGER_ACCESS_TOKEN` environment variables to point at your self-hosted instance and authenticate. For more detailed instructions, see the [GitHub Actions guide](https://trigger.dev/docs/github-actions)
.

[​](https://trigger.dev/docs/self-hosting/kubernetes#telemetry)

Telemetry
----------------------------------------------------------------------------

By default, the Trigger.dev webapp sends telemetry data to our servers. This data is used to improve the product and is not shared with third parties. To disable telemetry, set in your `values.yaml`:

    telemetry:
      enabled: false
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/self-hosting/docker)
[WebappEnvironment variables for the webapp container.\
\
Next](https://trigger.dev/docs/self-hosting/env/webapp)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
