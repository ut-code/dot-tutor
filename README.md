# 体験型点字学習ソフトウェア Learn Braille

[![Next.js](https://img.shields.io/badge/Next.js-000000.svg?logo=next.js)](https://github.com/vercel/next.js/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)
[![Build and Deploy](https://github.com/ut-code/learn-braille/actions/workflows/deploy.yml/badge.svg)](https://github.com/ut-code/learn-braille/actions/workflows/deploy.yml)
[![CI](https://github.com/ut-code/learn-braille/actions/workflows/ci.yml/badge.svg)](https://github.com/ut-code/learn-braille/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[English README is here.](README-en.md)

これは、体験型点字学習ソフトウェア Learn Braille です。

<img width="1436" alt="image" src="https://github.com/ut-code/learn-braille/assets/104971044/743816ce-7f7e-4905-998c-84dc5d03d3bc">

## 目次

- [概要](#概要)
- [使い方](#使い方)
- [開発](#開発)
  - [要件](#要件)
  - [環境構築](#環境構築)
  - [開発用サーバーの起動](#開発用サーバーの起動)
- [ライセンス](#ライセンス)
- [貢献](#貢献)

## 概要

これは、体験型点字学習ソフトウェア Learn Braille です。

## 使い方

この Web アプリケーションを使用するには、[ここ](https://ut-code.github.io/learn-braille/)にアクセスしてください。

## 開発

### 要件

- [npm](https://github.com/npm/cli)

### 推奨

- [VS Code 拡張機能](https://marketplace.visualstudio.com/VSCode)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

### 環境構築

このリポジトリをクローンしてから、プロジェクトのルートディレクトリに移動し、以下のコマンドを実行してください。

```shell
npm ci
```

### 開発

開発用サーバーを起動するには、以下のコマンドを実行してください。そうすると、[http://localhost:3000](http://localhost:3000) でアプリケーションにアクセスできます。

```shell
npm run dev
```

### コミット前

```shell
npm run lint && npm run build
```

## ライセンス

点字学習ソフトウェアは [MIT](https://opensource.org/licenses/MIT) ライセンスのもとで公開されています。

Copyright © 2023 ut.code();.

## コントリビューション

Issue や PR などはいつでも歓迎します。
