# Deploy a FastHTML app with Modal | Modal Docs

- **URL:** https://modal.com/docs/examples/fasthtml_app
- **Summary:** This example shows how you can deploy a FastHTML app with Modal. FastHTML is a Python library built on top of HTMX which allows you to create entire web applications using only Python.

[View on GitHub](https://github.com/modal-labs/modal-examples/blob/main/07_web/fasthtml_app.py)

Copy page

Deploy a FastHTML app with Modal
================================

This example shows how you can deploy a FastHTML app with Modal. [FastHTML](https://www.fastht.ml/)
 is a Python library built on top of [HTMX](https://htmx.org/)
 which allows you to create entire web applications using only Python.

The integration is pretty simple, thanks to the ASGI standard. You just need to define a function returns your FastHTML app and is decorated with `app.function` and `modal.asgi_app`.

    import modal
    
    app = modal.App("example-fasthtml-app")
    
    
    @app.function(
        image=modal.Image.debian_slim(python_version="3.12").uv_pip_install(
            "python-fasthtml==0.5.2"
        )
    )
    @modal.asgi_app()
    def serve():
        import fasthtml.common as fh
    
        app = fh.FastHTML()
    
        @app.get("/")
        def home():
            return fh.Div(fh.P("Hello World!"), hx_get="/change")
    
        return app

[Deploy a FastHTML app with Modal](https://modal.com/docs/examples/fasthtml_app#deploy-a-fasthtml-app-with-modal)
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
    modal serve 07_web/fasthtml_app.py
