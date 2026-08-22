# modal.call_graph | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.call_graph
- **Summary:** Simple data structure storing information about a function input.

Copy page

modal.call_graph
=================

modal.call_graph.InputInfo 

    class InputInfo(object)

Simple data structure storing information about a function input.

    __init__(self, input_id, function_call_id, task_id, status, function_name,
        module_name, children)

modal.call_graph.InputStatus 

    class InputStatus(enum.IntEnum)

Enum representing status of a function input.

The possible values are:

*   `PENDING`
*   `SUCCESS`
*   `FAILURE`
*   `INIT_FAILURE`
*   `TERMINATED`
*   `TIMEOUT`

[modal.call_graph](https://modal.com/docs/sdk/py/latest/modal.call_graph#modalcall_graph)
[InputInfo](https://modal.com/docs/sdk/py/latest/modal.call_graph#modalcall_graphinputinfo)
[InputStatus](https://modal.com/docs/sdk/py/latest/modal.call_graph#modalcall_graphinputstatus)
