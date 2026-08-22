# modal.method | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.method
- **Summary:** Decorator for methods that should be transformed into a Modal Function registered against this class’s App.

Copy page

modal.method
============

    method(*, is_generator=None)

Decorator for methods that should be transformed into a Modal Function registered against this class’s App.

**Usage**

    @app.cls(cpu=8)
    class MyCls:
    
        @modal.method()
        def f(self):
            ...

[modal.method](https://modal.com/docs/sdk/py/latest/modal.method#modalmethod)
