# modal.Environment | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.Environment
- **Summary:** Synchronize the local object with its identity on the Modal server.

Copy page

modal.Environment
=================

    class Environment(modal.object.Object)

hydrate 

    hydrate(self, client=None)

Synchronize the local object with its identity on the Modal server.

It is rarely necessary to call this method explicitly, as most operations will lazily hydrate when needed. The main use case is when you need to access object metadata, such as its ID.

_Added in v0.72.39_: This method replaces the deprecated `.resolve()` method.

name 

    name(self)

objects 

    objects: EnvironmentManager

Namespace with methods for managing Environment objects.

### objects.create 

    create(self, name, *, restricted=False, client=None)

Create a new Environment.

**Examples:**

    modal.Environment.objects.create("my-environment")

### objects.list 

    list(self, *, client=None)

Return a list of hydrated Environment objects.

**Examples:**

    environments = modal.Environment.objects.list()
    print([e.name for e in environments])

### objects.delete 

    delete(self, name, *, client=None)

Delete a named Environment.

Warning: This is irreversible and will transitively delete all objects in the Environment.

**Examples:**

    modal.Environment.objects.delete("my-environment")

members 

    members: EnvironmentMembersManager

Namespace with methods for managing the membership of a restricted Environment.

See [https://modal.com/docs/guide/rbac](https://modal.com/docs/guide/rbac)
 for more information on restricted Environments.

### members.list 

    list(self)

Return the members of a restricted Environment with their roles.

**Examples:**

    members = modal.Environment.from_name("my-restricted-env").members.list()
    print(members)
    # {
    #     "users": {"alice": "contributor", "bob": "viewer"},
    #     "service_users": {"alice-bot": "contributor"},
    # }

### members.update 

    update(self, *, users=None, service_users=None)

Add or modify roles for members of a restricted Environment.

Each user or service user will be added to the Environment if not currently a member; if already a member, the user or service user’s role will be updated.

**Examples:**

    env = modal.Environment.from_name("my-restricted-env")
    env.members.update(
        users={"alice": "contributor", "bob": "viewer"},
        service_users={"alice-bot": "contributor"},
    )

### members.remove 

    remove(self, *, users=None, service_users=None)

Remove members from a restricted Environment.

**Examples:**

    env = modal.Environment.from_name("my-restricted-env")
    env.members.remove(
        users=["alice"],
        service_users=["alice-bot"],
    )

from_context 

    from_context(*, client=None)

Look up an Environment object using the current context.

This method returns the Environment that is defined by the local configuration (i.e., your active profile or the `MODAL_ENVIRONMENT` environment variable), or it fetches the default environment from the server when not defined locally. If called inside a Modal container, it will return the Environment that container is associated with.

from_name 

    from_name(name, *, create_if_missing=False, client=None)

Look up an Environment object using its name.

billing 

    billing: EnvironmentBillingManager

Namespace for Environment billing APIs

    __init__(self, environment)

mdmd:ignore

### billing.report 

    report(self, *, start, end=None, resolution="d", tag_names=None)

Return a cost report for Environment usage, broken down by object and time.

**Parameters**

start datetime

Start of the report, inclusive and rounded to the beginning of the interval. Must be in UTC or timezone-naive (interpreted as UTC).

end datetime | None

End of the report, exclusive. Must be in UTC or timezone-naive. Partial final intervals will be excluded from the report.

resolution str

Resolution, e.g. "d" for daily or "h" for hourly. (Default is "d")

tag_names list\[str\] | None

List of tag names; each row will include the tag name and value in use for that object during the relevant time interval. Pass `["*"]` to include all tags in the report.

**Returns**

A list of `BillingReportItem` dataclasses. Each item reports the cost attributed to a specific Modal object during a given time interval. Cost is further broken down by the resource type that generated it (e.g. CPU, Memory, specific GPU usage). Note that the specific resource types included in the breakdown are subject to change as Modal’s billing model evolves.

**See Also**

*   [`modal environment billing report`](https://modal.com/docs/cli/latest/environment#modal-environment-billing-report)
    : An environment report CLI that has convenience features around relative time range queries and JSON/CSV output.
*   [`Workspace.billing.report()`](https://modal.com/docs/sdk/py/latest/modal.Workspace#billingreport)
    : An analogous report API for the entire Workspace.

[modal.Environment](https://modal.com/docs/sdk/py/latest/modal.Environment#modalenvironment)
[hydrate](https://modal.com/docs/sdk/py/latest/modal.Environment#hydrate)
[name](https://modal.com/docs/sdk/py/latest/modal.Environment#name)
[objects](https://modal.com/docs/sdk/py/latest/modal.Environment#objects)
[create](https://modal.com/docs/sdk/py/latest/modal.Environment#objectscreate)
[list](https://modal.com/docs/sdk/py/latest/modal.Environment#objectslist)
[delete](https://modal.com/docs/sdk/py/latest/modal.Environment#objectsdelete)
[members](https://modal.com/docs/sdk/py/latest/modal.Environment#members)
[list](https://modal.com/docs/sdk/py/latest/modal.Environment#memberslist)
[update](https://modal.com/docs/sdk/py/latest/modal.Environment#membersupdate)
[remove](https://modal.com/docs/sdk/py/latest/modal.Environment#membersremove)
[from_context](https://modal.com/docs/sdk/py/latest/modal.Environment#from_context)
[from_name](https://modal.com/docs/sdk/py/latest/modal.Environment#from_name)
[billing](https://modal.com/docs/sdk/py/latest/modal.Environment#billing)
[report](https://modal.com/docs/sdk/py/latest/modal.Environment#billingreport)
