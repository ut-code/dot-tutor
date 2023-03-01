初回

```shell
python3 -m venv env
```

```shell
source ./env/bin/activate
```

```shell
pip install mecab-python3
```

```shell
pip install unidic
```

```shell
python -m unidic download
```

二回目以降

```shell
source ./env/bin/activate
```

```shell
uvicorn main:app --reload --port 8000
```

参考資料

https://atmarkit.itmedia.co.jp/ait/articles/2102/05/news027_2.html

https://github.com/tadd/braille-ja-table
