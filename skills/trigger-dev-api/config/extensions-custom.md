# Custom build extensions

> Source: https://trigger.dev/docs/config/extensions/custom

Build extensions allow you to hook into the build system and customize the build process or the resulting bundle and container image (in the case of deploying). See our [build extension overview](https://trigger.dev/docs/config/extensions/overview)
 for more information on how to install and use our built-in extensions. Build extensions can do the following:

*   Add additional files to the build
*   Add dependencies to the list of externals
*   Add esbuild plugins
*   Add additional npm dependencies
*   Add additional system packages to the image build container
*   Add commands to run in the image build container
*   Add environment variables to the image build container
*   Sync environment variables to your Trigger.dev project

[​](https://trigger.dev/docs/config/extensions/custom#creating-a-build-extension)

Creating a build extension
---------------------------------------------------------------------------------------------------------------

Build extensions are added to your `trigger.config.ts` file, with a required `name` and optional build hook functions. Here’s a simple example of a build extension that just logs a message when the build starts:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [\
          {\
            name: "my-extension",\
            onBuildStart: async (context) => {\
              console.log("Build starting!");\
            },\
          },\
        ],
      },
    });
    

You can also extract that out into a function instead of defining it inline, in which case you will need to import the `BuildExtension` type from the `@trigger.dev/build` package:

You’ll need to add the `@trigger.dev/build` package to your `devDependencies` before the below code will work. Make sure it’s version matches that of the installed `@trigger.dev/sdk` package.

    import { defineConfig } from "@trigger.dev/sdk";
    import { BuildExtension } from "@trigger.dev/build";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [myExtension()],
      },
    });
    
    function myExtension(): BuildExtension {
      return {
        name: "my-extension",
        onBuildStart: async (context) => {
          console.log("Build starting!");
        },
      };
    }
    

[​](https://trigger.dev/docs/config/extensions/custom#build-hooks)

Build hooks
---------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/config/extensions/custom#externalsfortarget)

externalsForTarget

This allows the extension to add additional dependencies to the list of externals for the build. This is useful for dependencies that are not included in the bundle, but are expected to be available at runtime.

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [\
          {\
            name: "my-extension",\
            externalsForTarget: async (target) => {\
              return ["my-dependency"];\
            },\
          },\
        ],
      },
    });
    

### 

[​](https://trigger.dev/docs/config/extensions/custom#onbuildstart)

onBuildStart

This hook runs before the build starts. It receives the `BuildContext` object as an argument.

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [\
          {\
            name: "my-extension",\
            onBuildStart: async (context) => {\
              console.log("Build starting!");\
            },\
          },\
        ],
      },
    });
    

If you want to add an esbuild plugin, you must do so in the `onBuildStart` hook. Here’s an example of adding a custom esbuild plugin:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [\
          {\
            name: "my-extension",\
            onBuildStart: async (context) => {\
              context.registerPlugin({\
                name: "my-plugin",\
                setup(build) {\
                  build.onLoad({ filter: /.*/, namespace: "file" }, async (args) => {\
                    return {\
                      contents: "console.log('Hello, world!')",\
                      loader: "js",\
                    };\
                  });\
                },\
              });\
            },\
          },\
        ],
      },
    });
    

You can use the `BuildContext.target` property to determine if the build is for `dev` or `deploy`:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [\
          {\
            name: "my-extension",\
            onBuildStart: async (context) => {\
              if (context.target === "dev") {\
                console.log("Building for dev");\
              } else {\
                console.log("Building for deploy");\
              }\
            },\
          },\
        ],
      },
    });
    

### 

[​](https://trigger.dev/docs/config/extensions/custom#onbuildcomplete)

onBuildComplete

This hook runs after the build completes. It receives the `BuildContext` object and a `BuildManifest` object as arguments. This is where you can add in one or more `BuildLayer`’s to the context.

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [\
          {\
            name: "my-extension",\
            onBuildComplete: async (context, manifest) => {\
              context.addLayer({\
                id: "more-dependencies",\
                dependencies,\
              });\
            },\
          },\
        ],
      },
    });
    

See the [addLayer](https://trigger.dev/docs/config/extensions/custom#addlayer)
 documentation for more information on how to use `addLayer`.

[​](https://trigger.dev/docs/config/extensions/custom#buildtarget)

BuildTarget
---------------------------------------------------------------------------------

Can either be `dev` or `deploy`, matching the CLI command name that is being run.

    npx trigger.dev@latest dev # BuildTarget is "dev"
    npx trigger.dev@latest deploy # BuildTarget is "deploy"
    

[​](https://trigger.dev/docs/config/extensions/custom#buildcontext)

BuildContext
-----------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/config/extensions/custom#addlayer)

addLayer()

[​](https://trigger.dev/docs/config/extensions/custom#param-layer)

layer

BuildLayer

The layer to add to the build context. See the [BuildLayer](https://trigger.dev/docs/config/extensions/custom#buildlayer)
 documentation for more information.

### 

[​](https://trigger.dev/docs/config/extensions/custom#registerplugin)

registerPlugin()

[​](https://trigger.dev/docs/config/extensions/custom#param-plugin)

plugin

esbuild.Plugin

required

The esbuild plugin to register.

[​](https://trigger.dev/docs/config/extensions/custom#param-options)

options

object

Show properties

[​](https://trigger.dev/docs/config/extensions/custom#param-target)

target

BuildTarget

An optional target to register the plugin for. If not provided, the plugin will be registered for all targets.

[​](https://trigger.dev/docs/config/extensions/custom#param-placement)

placement

first | last

An optional placement for the plugin. If not provided, the plugin will be registered in place. This allows you to control the order of plugins.

### 

[​](https://trigger.dev/docs/config/extensions/custom#resolvepath)

resolvePath()

Resolves a path relative to the project’s working directory.

[​](https://trigger.dev/docs/config/extensions/custom#param-path)

path

string

The path to resolve.

    const resolvedPath = context.resolvePath("my-other-dependency");
    

### 

[​](https://trigger.dev/docs/config/extensions/custom#properties)

properties

[​](https://trigger.dev/docs/config/extensions/custom#param-target-1)

target

BuildTarget

The target of the build, either `dev` or `deploy`.

[​](https://trigger.dev/docs/config/extensions/custom#param-config)

config

ResolvedConfig

Show properties

[​](https://trigger.dev/docs/config/extensions/custom#param-runtime)

runtime

string

The runtime of the project (either node or bun)

[​](https://trigger.dev/docs/config/extensions/custom#param-project)

project

string

The project ref

[​](https://trigger.dev/docs/config/extensions/custom#param-dirs)

dirs

string\[\]

The trigger directories to search for tasks

[​](https://trigger.dev/docs/config/extensions/custom#param-build)

build

object

The build configuration object

[​](https://trigger.dev/docs/config/extensions/custom#param-working-dir)

workingDir

string

The working directory of the project

[​](https://trigger.dev/docs/config/extensions/custom#param-workspace-dir)

workspaceDir

string

The root workspace directory of the project

[​](https://trigger.dev/docs/config/extensions/custom#param-package-json-path)

packageJsonPath

string

The path to the package.json file

[​](https://trigger.dev/docs/config/extensions/custom#param-lockfile-path)

lockfilePath

string

The path to the lockfile (package-lock.json, yarn.lock, or pnpm-lock.yaml)

[​](https://trigger.dev/docs/config/extensions/custom#param-config-file)

configFile

string

The path to the trigger.config.ts file

[​](https://trigger.dev/docs/config/extensions/custom#param-tsconfig-path)

tsconfigPath

string

The path to the tsconfig.json file

[​](https://trigger.dev/docs/config/extensions/custom#param-logger)

logger

BuildLogger

A logger object that can be used to log messages to the console.

[​](https://trigger.dev/docs/config/extensions/custom#buildlayer)

BuildLayer
-------------------------------------------------------------------------------

[​](https://trigger.dev/docs/config/extensions/custom#param-id)

id

string

A unique identifier for the layer.

[​](https://trigger.dev/docs/config/extensions/custom#param-commands)

commands

string\[\]

An array of commands to run in the image build container.

    commands: ["echo 'Hello, world!'"];
    

These commands are run after packages have been installed and the code copied into the container in the “build” stage of the Dockerfile. This means you cannot install system packages in these commands because they won’t be available in the final stage. To do that, please use the `pkgs` property of the `image` object.

[​](https://trigger.dev/docs/config/extensions/custom#param-image)

image

object

Show properties

[​](https://trigger.dev/docs/config/extensions/custom#param-pkgs)

pkgs

string\[\]

An array of system packages to install in the image build container.

[​](https://trigger.dev/docs/config/extensions/custom#param-instructions)

instructions

string\[\]

An array of instructions to add to the Dockerfile.

[​](https://trigger.dev/docs/config/extensions/custom#param-build-1)

build

object

Show properties

[​](https://trigger.dev/docs/config/extensions/custom#param-env)

env

Record<string, string>

Environment variables to add to the image build container, but only during the “build” stage of the Dockerfile. This is where you’d put environment variables that are needed when running any of the commands in the `commands` array.

[​](https://trigger.dev/docs/config/extensions/custom#param-deploy)

deploy

object

Show properties

[​](https://trigger.dev/docs/config/extensions/custom#param-env-1)

env

Record<string, string>

Environment variables that should sync to the Trigger.dev project, which will then be avalable in your tasks at runtime. Importantly, these are NOT added to the image build container, but are instead added to the Trigger.dev project and stored securely.

[​](https://trigger.dev/docs/config/extensions/custom#param-dependencies)

dependencies

Record<string, string>

An object of dependencies to add to the build. The key is the package name and the value is the version.

    dependencies: {
      "my-dependency": "^1.0.0",
    };
    

### 

[​](https://trigger.dev/docs/config/extensions/custom#examples)

examples

Add a command that will echo the value of an environment variable:

    context.addLayer({
      id: "my-layer",
      commands: [`echo $MY_ENV_VAR`],
      build: {
        env: {
          MY_ENV_VAR: "Hello, world!",
        },
      },
    });
    

[​](https://trigger.dev/docs/config/extensions/custom#troubleshooting)

Troubleshooting
-----------------------------------------------------------------------------------------

When creating a build extension, you may run into issues with the build process. One thing that can help is turning on `debug` logging when running either `dev` or `deploy`:

    npx trigger.dev@latest dev --log-level debug
    npx trigger.dev@latest deploy --log-level debug
    

Another helpful tool is the `--dry-run` flag on the `deploy` command, which will bundle your project and generate the Containerfile (e.g. the Dockerfile) without actually deploying it. This can help you see what the final image will look like and debug any issues with the build process.

    npx trigger.dev@latest deploy --dry-run
    

You should also take a look at our built in extensions for inspiration on how to create your own. You can find them in in [the source code here](https://github.com/triggerdotdev/trigger.dev/tree/main/packages/build/src/extensions)
.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/audioWaveform)
[OverviewLearn how to deploy your tasks to Trigger.dev.\
\
Next](https://trigger.dev/docs/deployment/overview)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
