# Debugging in VS Code

> Source: https://trigger.dev/docs/troubleshooting-debugging-in-vscode

Debugging your task code in `dev` is supported via VS Code, without having to pass in any additional flags. Create a launch configuration in `.vscode/launch.json`:

launch.json

    {
      "version": "0.2.0",
      "configurations": [\
        {\
          "name": "Trigger.dev: Dev",\
          "type": "node",\
          "request": "launch",\
          "cwd": "${workspaceFolder}",\
          "runtimeExecutable": "npx",\
          "runtimeArgs": ["trigger.dev@latest", "dev"],\
          "skipFiles": ["<node_internals>/**"],\
          "sourceMaps": true\
        }\
      ]
    }
    

Then you can start debugging your tasks code by selecting the `Trigger.dev: Dev` configuration in the debug panel, and set breakpoints in your tasks code.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/how-to-reduce-your-spend)
[Upgrading packagesWhen we release fixes and new features we recommend you upgrade your Trigger.dev packages.\
\
Next](https://trigger.dev/docs/upgrading-packages)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
