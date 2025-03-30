# Contributing

Thank you for being interested in this project! We are excited to have you here. This document will guide you through the process of contributing to this project.

## Setup (locally)

To set up the project locally, you need to have [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/) installed.

```bash
npm i
```

## Development

To start the development server, run

```bash
npm run dev
```

> [!WARNING]
> Make sure building the project before running test cases.
> HMR (Hot Module Replacement) is not supported in the test environment.

To run the tests, run

```bash
npm run build
npm run test
npm run serve
```

## Code Style

We use [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config) for code style.

To lint the code, run

```bash
npm run lint --fix
```
