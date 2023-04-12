# utils-scalajs

A Scala.js library using Nx.

## Building

As prerequisites, you'll need Nix installed, and `nix-shell` must be available.
The build will install a version of `sbt` within the Nix shell, run the build, then output it into `dist/`.

Run `nx build utils-scalajs` to build the library.

## Running unit tests

Run `nx test utils-scalajs` to execute the unit tests via [Jest](https://jestjs.io).
