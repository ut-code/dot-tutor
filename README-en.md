# Learn Braille

[![Next.js](https://img.shields.io/badge/Next.js-000000.svg?logo=next.js)](https://github.com/vercel/next.js/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)
[![Build and Deploy](https://github.com/ut-code/learn-braille/actions/workflows/deploy.yml/badge.svg)](https://github.com/ut-code/learn-braille/actions/workflows/deploy.yml)
[![CI](https://github.com/ut-code/learn-braille/actions/workflows/ci.yml/badge.svg)](https://github.com/ut-code/learn-braille/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[日本語版 README はこちら](README.md)

This is Learn Braille, which is a web application for learning Braille.

<img width="1436" alt="image" src="https://github.com/ut-code/learn-braille/assets/104971044/743816ce-7f7e-4905-998c-84dc5d03d3bc">

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Development](#development)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [License](#license)
- [Contributing](#contributing)

## About

This is Learn Braille, which is a web application for learning Braille.

## Usage

To use this web application, just visit [here](https://ut-code.github.io/learn-braille/).

## Development

### Requirements

- [npm](https://github.com/npm/cli)

### Recommended

- [VS Code Extensions](https://marketplace.visualstudio.com/VSCode)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

### Installation

After cloning this repository, move to the project root directory and then run the command below.

```shell
npm ci
```

### Local Development

```shell
npm run dev
```

After running the command above, visit [http://localhost:3000/](http://localhost:3000/).

### Before Commit

```shell
npm run lint && npm run build
```

## License

Learn Braille is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

Copyright © 2023 ut.code();.

## Contributing

Issue or PR is always welcome.
