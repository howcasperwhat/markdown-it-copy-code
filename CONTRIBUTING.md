# Contributing

Thank you for being interested in this project! We are excited to have you here. This document will guide you through the process of contributing to this project.

## Setup (locally)

To set up the project locally, you need to have [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/) installed.

```bash
npm i
```

## Tests

> [!WARNING]
> Make sure building the project before running test cases.
> HMR (Hot Module Replacement) is not supported in the test environment.

To run the tests, run

```bash
npm run build
npm run test
npm run serve
```

See `test/output/small.html`, `test/output/medium.html`, and `test/output/large.html` for the test results.

## Code Style

We use [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config) for code style.

To lint the code, run

```bash
npm run lint --fix
```

Ensure fixing all the linting errors before submitting a pull request.
