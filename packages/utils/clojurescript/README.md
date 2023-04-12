# utils-clojurescript

A utility library written in ClojureScript.

## Building

Pre-requisites: you must have **Nix** installed and `nix-shell` available in your path.

Run `nx build utils-clojurescript` to build the library.
On the first run, this will download the required dependencies to run the build within an isolated environment.
On subsequent runs, the same environment will be used.

## Running unit tests

Run `nx test utils-clojurescript` to execute the unit tests via [Jest](https://jestjs.io).
