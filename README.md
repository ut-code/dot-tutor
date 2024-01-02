# Dot Tutor

[![CI](https://github.com/ut-code/dot-tutor/actions/workflows/ci.yml/badge.svg)](https://github.com/ut-code/dot-tutor/actions/workflows/ci.yml)
[![Deploy Staging](https://github.com/ut-code/dot-tutor/actions/workflows/deploy-staging.yml/badge.svg)](https://github.com/ut-code/dot-tutor/actions/workflows/deploy-staging.yml)
[![Deploy Production](https://github.com/ut-code/dot-tutor/actions/workflows/deploy-production.yml/badge.svg)](https://github.com/ut-code/dot-tutor/actions/workflows/deploy-production.yml)
![license](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

こちらは、Dot Tutorのリポジトリです。

## 目次

- [概要](#概要)
- [使い方](#使い方)
- [開発](#開発)
  - [要件](#要件)
  - [推奨](#推奨)
  - [環境構築](#環境構築)
  - [開発用サーバーの起動](#開発用サーバーの起動)
  - [コミット前](#コミット前)
- [ライセンス](#ライセンス)
- [コントリビューション](#コントリビューション)

## 概要

こちらは、Dot Tutorのリポジトリです。ウェブサイトと、Dot Tutor Learn、Dot Tutor Translateの3つのアプリケーションを含んでいます。

## 使い方

ウェブサイトは、[https://dot-tutor.com/](https://dot-tutor.com/)にアクセスしてください。
Dot Tutor Learnは、[https://learn.dot-tutor.com/](https://learn.dot-tutor.com/)にアクセスしてください。
Dot Tutor Translateは、[https://translate.dot-tutor.com/](https://translate.dot-tutor.com/)にアクセスしてください。

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
npm setup
```

### 開発用サーバーの起動

#### ウェブサイト

開発用サーバーを起動するには、以下のコマンドを実行してください。そうすると、[http://localhost:3000](http://localhost:5173)でアプリケーションにアクセスできます。

```shell
npm run dev:website
```

#### Dot Tutor Learn

開発用サーバーを起動するには、以下のコマンドを実行してください。そうすると、[http://localhost:3000](http://localhost:3000)でアプリケーションにアクセスできます。

```shell
npm run dev:learn
```

#### Dot Tutor Translate

バックエンドの起動は、[こちら](./translate-backend/README.md)を参照してください。

フロントエンドの開発用サーバーを起動するには、以下のコマンドを実行してください。そうすると、[http://localhost:3000](http://localhost:5173)でアプリケーションにアクセスできます。

```shell
npm run dev:translate
```

### コミット前

コミット前には、プロジェクトルートで以下のコマンドを実行して、コードスタイルと型のチェックを行ってください。

```shell
npm run lint && npm run type-check
```

## ライセンス

このソフトウェアは [MIT](./LICENSE) ライセンスのもとで公開されています。

Copyright © 2023 ut.code();.

## コントリビューション

Issue や PR などはいつでも歓迎します。
