# バックエンド

## 環境構築

### 初回

#### 仮想環境の作成

```shell
python3 -m venv env
```

```shell
source ./env/bin/activate
```

#### Mecab のインストール

```shell
pip install mecab-python3 unidic
```

```shell
python -m unidic download
```

#### FastAPI のインストール

```shell
pip install uvicorn fastapi
```

### 二回目以降

```shell
source ./env/bin/activate
```

```shell
uvicorn main:app --reload --port 8000
```

## 参考資料

https://atmarkit.itmedia.co.jp/ait/articles/2102/05/news027_2.html

https://github.com/tadd/braille-ja-table
