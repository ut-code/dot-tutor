# 自動点訳ソフトウェア Translate Braille

[![React](https://img.shields.io/badge/React-555.svg?logo=react)](https://github.com/facebook/react)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)
[![Vite](https://img.shields.io/badge/Vite-1e1e20.svg?logo=vite)](https://github.com/vitejs/vite)
[![CI](https://github.com/ut-code/translate-braille/actions/workflows/ci.yml/badge.svg)](https://github.com/ut-code/translate-braille/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[English README is here.](README-en.md)

これは、自動点訳ソフトウェア Translate Braille です。

<img width="1440" alt="image" src="https://github.com/ut-code/translate-braille/assets/104971044/b54e7676-d1c1-4f5a-8709-a29fadaf5131">

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

これは、自動点字翻訳ソフトウェア Translate Braille です。

## 使い方

この Web アプリケーションを使用するには、[ここ](https://translate-braille.onrender.com/)にアクセスしてください。

## 開発

### 要件

- [npm](https://github.com/npm/cli)
- [Python 3](https://www.python.org/)

### 推奨

- [VS Code 拡張機能](https://marketplace.visualstudio.com/VSCode)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Black](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter)

### 環境構築

このリポジトリをクローンしてから、プロジェクトのルートディレクトリに移動し、以下のコマンドを実行してください。

```shell
npm run setup
```

### 開発用サーバーの起動

開発用サーバーを起動するには、以下のコマンドを実行してください。そうすると、[http://localhost:5173/](http://localhost:5173/) でアプリケーションにアクセスできます。

```shell
npm run dev
```

### コミット前

コミット前には、以下のコマンドを実行して、コードスタイルと型のチェックを行ってください。

```shell
npm run format && npm run type-check
```

## ライセンス

このソフトウェアは [MIT](./LICENSE) ライセンスのもとで公開されています。

Copyright © 2023 ut.code();.

## コントリビューション

Issue や PR などはいつでも歓迎します。

## 参考資料

https://atmarkit.itmedia.co.jp/ait/articles/2102/05/news027_2.html

https://github.com/tadd/braille-ja-table
