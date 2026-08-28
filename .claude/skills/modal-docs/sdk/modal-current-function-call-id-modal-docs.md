# modal.current_function_call_id | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.current_function_call_id
- **Summary:** Returns the function call ID for the current input.

Copy page

modal.current_function_call_id
=================================

    current_function_call_id()

Returns the function call ID for the current input.

Can only be called from Modal function (i.e. in a container context).

    from modal import current_function_call_id
    
    @app.function()
    def process_stuff():
        print(f"Starting to process input from {current_function_call_id()}")

[modal.current_function_call_id](https://modal.com/docs/sdk/py/latest/modal.current_function_call_id#modalcurrent_function_call_id)
