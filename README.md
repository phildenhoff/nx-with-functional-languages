# Nx with functional languages

A demonstrations of how you can add functional, compile-to-JS languages to an Nx workspace, and then use those libraries from other Nx libraries and apps.

## Repo layout

- `utils/`: Contains libraries written in compile-to-JS languages.
- `ts-using-vite/`: Demonstrates how to use all of the `utils/` libraries from a TypeScript app.
- `ts-using-tsc/`: Demonstrates how to use all of the `utils/` libraries from a TypeScript app (e.g. utils-rescript).
- `js-no-build/`: Demonstrates how a JS-only app can import a (properly configured) library (e.g. utils-rescript).

## Guidelines

Where possible, we use the following guidelines:

- **Use the Language's standard tools.** Generally, that means our `nx` tasks call out to the language's CLI using the `run-command` task.
- **Use Vitest to execute tests.**

## View the dependency graph

Run `nx graph` to see a diagram of the dependencies of the projects.
