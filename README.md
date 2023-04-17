# Nx with functional languages

A project to build proof-of-concept Nx packages using functional language projects that compile to JS.
Using buildable libraries, we can compile to JS during a build and then use those libraries from other Nx libraries and apps.

Different languages are available in [packages/utils](https://github.com/phildenhoff/nx-with-functional-languages/tree/main/packages/utils) and test cases importing are in [packages/ts-using-vite/src/lib](https://github.com/phildenhoff/nx-with-functional-languages/tree/main/packages/ts-using-vite/src/lib)

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
