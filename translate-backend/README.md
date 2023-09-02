# Translate Braille バックエンド

## 環境構築

1. `translate-backend`に移動する。
2. 仮想環境を作成する。
   ```shell
   python3 -m venv env
   ```
3. 仮想環境を有効化する。
   ```shell
   . env/bin/activate
   ```
4. 必要なパッケージをインストールする。
   ```shell
   pip install -r requirements.txt
   ```
5. `unidic`をダウンロードする。
   ```shell
   python -m unidic download
   ```
6. 仮想環境を無効化する。
   ```shell
   deactivate
   ```

## 開発環境の起動

1. `translate-backend`に移動する。
2. 仮想環境を有効化する。
   ```shell
   . env/bin/activate
   ```
3. 開発環境を起動する。
   ```shell
    uvicorn main:app --reload --port 8000
   ```
4. 仮想環境を無効化する。
   ```shell
   deactivate
   ```

### フォーマット

仮想環境を立ち上げて、

```shell
black .
```
