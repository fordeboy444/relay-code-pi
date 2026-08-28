# modal.current_input_id | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.current_input_id
- **Summary:** Returns the input ID for the current input.

Copy page

modal.current_input_id
========================

    current_input_id()

Returns the input ID for the current input.

Can only be called from Modal function (i.e. in a container context).

    from modal import current_input_id
    
    @app.function()
    def process_stuff():
        print(f"Starting to process {current_input_id()}")

[modal.current_input_id](https://modal.com/docs/sdk/py/latest/modal.current_input_id#modalcurrent_input_id)
