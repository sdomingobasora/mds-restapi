# Express TypeScript Server

This is a small server written in TypeScript, using the Express framework and the
SWC bundler. It includes unit and e2e tests to provide a less bug-prone deployment
process. It also includes a linter to maintain code quality.

## Getting Started

1. Clone the repository:

```sh
git clone https://github.com/sdomingobasora/mds-restapi.git
```

2. Install dependencies


```sh
yarn
```

3. Run the server:

```sh
yarn start
```

4. Try accessing the server

```sh
# Currently only /hello is available
curl http://127.0.0.1:3000/hello
```

To run tests

```sh
# Unit tests
yarn run test:unit

# E2e tests
yarn run test:e2e
```

## CI

The CI pipeline includes linting and running unit tests for each new PR.  
Additionally, it runs e2e tests, creates a new tag using semantic release,
then creates an image and pushes it to docker hub to later deploy this
image in an OpenShift cluster.

## Preview

There's a `preview` branch in which, whenever there's a new commit in `main`, it
will be updated so that the image can be updated in a pre-production
environment.
