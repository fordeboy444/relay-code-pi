# OpenAI Agents SDK for Python guardrails

> Source: https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails

[​](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails#overview)

Overview
------------------------------------------------------------------------------------------------------

This demo is a practical guide that demonstrates:

*   **Three types of AI guardrails**: Input validation, output checking, and real-time streaming monitoring
*   Integration of the [OpenAI Agent SDK for Python](https://openai.github.io/openai-agents-python/)
     with [Trigger.dev](https://trigger.dev/)
     for production AI workflows
*   Triggering Python scripts from tasks using our [Python build extension](https://trigger.dev/docs/config/extensions/pythonExtension)
    
*   **Educational examples** of implementing guardrails for AI safety and control mechanisms
*   Real-world scenarios like math tutoring agents with content validation and complexity monitoring

Guardrails are safety mechanisms that run alongside AI agents to validate input, check output, monitor streaming content in real-time, and prevent unwanted or harmful behavior.

[​](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails#github-repo)

GitHub repo
------------------------------------------------------------------------------------------------------------

View the OpenAI Agent SDK Guardrails repo
-----------------------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails#video)

Video
------------------------------------------------------------------------------------------------

[​](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails#relevant-code)

Relevant code
----------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails#trigger-dev-tasks)

Trigger.dev Tasks

*   **[inputGuardrails.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agent-sdk-guardrails-examples/src/trigger/inputGuardrails.ts)
    ** - Passes user prompts to Python script and handles `InputGuardrailTripwireTriggered` exceptions
*   **[outputGuardrails.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agent-sdk-guardrails-examples/src/trigger/outputGuardrails.ts)
    ** - Runs agent generation and catches `OutputGuardrailTripwireTriggered` exceptions with detailed error info
*   **[streamingGuardrails.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agent-sdk-guardrails-examples/src/trigger/streamingGuardrails.ts)
    ** - Executes streaming Python script and parses JSON output containing guardrail metrics

### 

[​](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails#python-implementations)

Python Implementations

*   **[input-guardrails.py](https://github.com/triggerdotdev/examples/blob/main/openai-agent-sdk-guardrails-examples/src/python/input-guardrails.py)
    ** - Agent with `@input_guardrail` decorator that validates user input before processing (example: math tutor that only responds to math questions)
*   **[output-guardrails.py](https://github.com/triggerdotdev/examples/blob/main/openai-agent-sdk-guardrails-examples/src/python/output-guardrails.py)
    ** - Agent with `@output_guardrail` decorator that validates generated responses using a separate guardrail agent
*   **[streaming-guardrails.py](https://github.com/triggerdotdev/examples/blob/main/openai-agent-sdk-guardrails-examples/src/python/streaming-guardrails.py)
    ** - Processes `ResponseTextDeltaEvent` streams with async guardrail checks at configurable intervals (example: stops streaming if language is too complex for a 10-year-old)

### 

[​](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails#configuration)

Configuration

*   **[trigger.config.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agent-sdk-guardrails-examples/trigger.config.ts)
    ** - Uses the Trigger.dev Python extension

### 

[​](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails#learn-more)

Learn more

*   [OpenAI Agent SDK documentation](https://openai.github.io/openai-agents-python/)
    
*   [OpenAI Agent SDK guardrails](https://openai.github.io/openai-agents-python/guardrails/)
    
*   Our [Python build extension](https://trigger.dev/docs/config/extensions/pythonExtension#python)
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-image-generator)
[Process imagesLearn how to use Trigger.dev with Python to process images from URLs and upload them to S3.\
\
Next](https://trigger.dev/docs/guides/python/python-image-processing)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
