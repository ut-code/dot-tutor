初回
python -m venv env
pip install mecab-python3
pip install unidic
python -m unidic download



二回目以降
source ./env/bin/activate
uvicorn main:app --reload --port 8000

参考資料
https://atmarkit.itmedia.co.jp/ait/articles/2102/05/news027_2.html
https://github.com/tadd/braille-ja-table