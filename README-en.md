# Learn Braille

[![React](https://img.shields.io/badge/React-555.svg?logo=react)](https://github.com/facebook/react)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)
[![Vite](https://img.shields.io/badge/Vite-1e1e20.svg?logo=vite)](https://github.com/vitejs/vite)
[![CI](https://github.com/ut-code/translate-braille/actions/workflows/ci.yml/badge.svg)](https://github.com/ut-code/translate-braille/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[日本語版 README はこちら](README.md)

This is Translate Braille, which is a web application for automatically translating Braille.

<img width="1440" alt="image" src="https://github.com/ut-code/translate-braille/assets/104971044/b54e7676-d1c1-4f5a-8709-a29fadaf5131">

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Development](#development)
  - [Requirements](#requirements)
  - [Recommended](#recommended)
  - [Installation](#installation)
  - [Local Development](#local-development)
  - [Before Commit](#before-commit)
- [License](#license)
- [Contributing](#contributing)

## About

This is Translate Braille, which is a web application for automatically translating Braille.

## Usage

To use this web application, just visit [here](https://translate-braille.onrender.com/).

## Development

### Requirements

- [npm](https://github.com/npm/cli)
- [Python 3](https://www.python.org/)

### Recommended

- [VS Code Extensions](https://marketplace.visualstudio.com/VSCode)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Black](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter)

### Installation

After cloning this repository, move to the project root directory and then run the command below.

```shell
npm run setup
```

### Local Development

To start local development, run the command below. Then, you can access the application at [http://localhost:5173/](http://localhost:5173/).

```shell
npm run dev
```

### Before Commit

Before committing, run the command below to check the code style and types.

```shell
npm run format && npm run type-check
```

## License

This software is licensed under the [MIT](./LICENSE) license.

Copyright © 2023 ut.code();.

## Contributing

Issue or PR is always welcome.
