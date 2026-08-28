# Environments | Modal Docs

- **URL:** https://modal.com/docs/guide/environments
- **Summary:** Modal Environments isolate Modal applications and resources from one another.

Copy page

Environments
============

Modal Environments isolate Modal applications and resources from one another.

Environments are sub-divisions of [Workspaces](https://modal.com/docs/guide/workspaces)
, allowing you to deploy the same App (or set of Apps) in multiple instances for different purposes without changing code.

Typical use cases for Environments include having one `dev` Environment and one `prod` Environment. Production Apps are protected from overwriting when developing new features, but you can still deploy and test changes with a “live” and potentially complex structure of Apps.

Each Environment has its own set of [Secrets](https://modal.com/docs/guide/secrets)
 and any object lookups, say for [Dicts](https://modal.com/docs/guide/dicts)
 or [Volumes](https://modal.com/docs/guide/volumes)
, performed from an App in an Environment will by default look for objects in the same Environment.

By default, every Workspace has a single Environment called “main”. New Environments can be created on the CLI:

    modal environment create dev

Run `modal environment --help` for more info.

Workspaces can have up to 1500 Environments.

Once created, Environments show up as a dropdown menu in the navbar of the [Modal dashboard](https://modal.com/apps)
, letting you set browse all Modal Apps, Secrets, and Storage filtered by which Environment they were deployed to.

Most CLI commands also support an `--env` flag letting you specify which Environment you intend to interact with, e.g.:

    modal run --env=dev app.py
    modal volume create --env=dev storage

To set a default Environment for your current CLI profile you can use `modal config set-environment`, e.g.:

    modal config set-environment dev

Alternatively, you can set the `MODAL_ENVIRONMENT` environment variable.

Environment web suffixes 

Environments have a ‘web suffix’ which is used to make [Web Function URLs](https://modal.com/docs/guide/webhook-urls)
 unique across your workspace. One Environment is allowed to have no suffix (`""`).

Cross environment lookups 

It’s possible to explicitly look up objects in Environments other than the Environment your App runs within:

    production_secret = modal.Secret.from_name(
        "my-secret",
        environment_name="main",
    )

    modal.Function.from_name(
        "my_app",
        "some_function",
        environment_name="dev"
    )

However, the `environment_name` argument is optional and omitting it will use the Environment from the object’s associated App or calling context.

[Environments](https://modal.com/docs/guide/environments#environments)
[Environment web suffixes](https://modal.com/docs/guide/environments#environment-web-suffixes)
[Cross environment lookups](https://modal.com/docs/guide/environments#cross-environment-lookups)
