# modal.asgi_app | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.asgi_app
- **Summary:** Decorator for registering an ASGI app as a Web Function.

Copy page

modal.asgi_app
===============

    asgi_app(*, label=None, custom_domains=None, requires_proxy_auth=False)

Decorator for registering an ASGI app as a Web Function.

Asynchronous Server Gateway Interface (ASGI) is a standard for Python web apps, supported by all popular Python web libraries.

To learn how to use Modal with popular web frameworks, see the [guide on Web Functions](https://modal.com/docs/guide/webhooks)
.

**Usage**

    from typing import Callable
    
    @app.function()
    @modal.asgi_app()
    def create_asgi() -> Callable:
        ...

[modal.asgi_app](https://modal.com/docs/sdk/py/latest/modal.asgi_app#modalasgi_app)
