# modal.Client | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.Client
- **Summary:** Check if the client is closed.

Copy page

modal.Client
============

    class Client(object)

is_closed 

    is_closed(self)

Check if the client is closed.

**Returns**

True if the client is closed, False otherwise.

hello 

    hello(self)

Connect to server and retrieve version information; raise appropriate error for various failures.

**Usage**

    client = modal.Client.from_env()
    client.hello()

from_credentials 

    from_credentials(cls, token_id, token_secret)

Constructor based on token credentials; useful for managing Modal on behalf of third-party users.

Also useful when it’s necessary to explicitly manage the lifecycle of the client (e.g. when running Modal in a forked subprocess) — see [troubleshooting](https://modal.com/docs/guide/troubleshooting#connection-issues-in-forked-processes)
.

**Parameters**

token_id str

API token ID.

token_secret str

API token secret.

**Returns**

An authenticated `Client` with its connection opened.

**Usage**

    client = modal.Client.from_credentials("my_token_id", "my_token_secret")
    
    modal.Sandbox.create("echo", "hi", client=client, app=app)

get_input_plane_metadata 

    get_input_plane_metadata(self, input_plane_region)

Get the metadata for the input plane.

**Parameters**

input_plane_region str

The region of the input plane.

**Returns**

The metadata for the input plane as a list of header/value tuples.

[modal.Client](https://modal.com/docs/sdk/py/latest/modal.Client#modalclient)
[is_closed](https://modal.com/docs/sdk/py/latest/modal.Client#is_closed)
[hello](https://modal.com/docs/sdk/py/latest/modal.Client#hello)
[from_credentials](https://modal.com/docs/sdk/py/latest/modal.Client#from_credentials)
[get_input_plane_metadata](https://modal.com/docs/sdk/py/latest/modal.Client#get_input_plane_metadata)
