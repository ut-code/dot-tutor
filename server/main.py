from urllib import request
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import MeCab 
import unidic
import mapping

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://127.0.0.1",
    "http://127.0.0.1:5173",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


'''
def wakati_func(source):
    target = tagger.parse(source)
    return target
'''

def wakati_func(source):
    tagger = MeCab.Tagger()
    parses = tagger.parse(source)
    pasrses_1 = parses.split('\n')
    target = []
    
    hinshi = ""
    prehinshi = ""
    for parse in pasrses_1:
        par = parse.split('\t')
        if len(par) == 2:
            hinshi = par[1].split(",")[0]
            hinshi_specific = par[1].split(",")[1]
            if hinshi == "補助記号":
                kana = parse.split()[0]
            elif hinshi_specific == "数詞":
                kana = parse.split()[0]
            else:
                kana = par[1].split(",")[9]
                kana_normal = par[1].split(",")[6]
            
            if hinshi == "名詞" or hinshi == "代名詞":
                letter = [_ for _ in kana]
                letter_normal = [_ for _ in kana_normal]
                for num in range(len(letter)):
                    if letter[num] == "ー" and (letter_normal[num] == "イ" or letter_normal[num] == "オ"):
                        letter[num] = letter_normal[num]
                kana = "".join(letter)
            if hinshi == "助動詞" or hinshi == "助詞" or hinshi == "接尾辞":
                target.append(kana)
            elif prehinshi == "接頭辞":
                target.append(kana)
            elif kana == "*":
                pass
            elif hinshi == "補助記号":
                target.append(kana)
            elif target == []:
                target.append(kana)
            else:
                target.append(" " + kana)
            prehinshi = hinshi
    return "".join(target)
    


'''
def tenji_func(source):
    letter = [_ for _ in source]
    target = []
    for char in letter:
        if char in mapping.mapping:
            target.append(mapping.mapping[char])
        elif char == " ": 
            # print 
            target.append("　")
        else:
            # print 
            target.append(char)
    return "".join(target)
'''

def wakati_oyomi_func(source):
    # mecab -Owakati, -Oyomi
    owakati_tagger = MeCab.Tagger("-Owakati")
    oyomi_tagger = MeCab.Tagger("-Oyomi")
    owakati = owakati_tagger.parse(source)
    oyomi = oyomi_tagger.parse(source)
    target = oyomi
    return target


def tenji_func(source):
    letter = [_ for _ in source]
    target = []
    pre_num = False
    for char in letter:
        if char in mapping.mapping:
            target.append(mapping.mapping[char])
        elif prechar + char in mapping.mapping:
            target.pop(len(target) - 1)
            target.append(mapping.mapping[prechar + char])
        elif char in mapping.mapping_num:
            if pre_num == True:
                target.append(mapping.mapping_num[char])
            else:
                target.append("⠼" + mapping.mapping_num[char])
            pre_num = True
        elif char == " ": 
            # print 
            target.append("　")
        else:
            target.append(char)
        prechar = char
    return "".join(target)

def translate_func(text):
    wakati = wakati_func(text)
    tenji = tenji_func(wakati)
    return tenji, wakati


# translate text to braille
@app.get("/translate/source/")
async def translate(text: str):

    tenji, wakati = translate_func(text)
    return {"source": text, "tenji": tenji, "wakati": wakati}

@app.get("/wakati/")
async def wakati(text: str):
    wakati = wakati_func(text)
    return {"source": text, "wakati": wakati}

@app.get("/tenji/")
async def tenji(text: str):
    tenji = tenji_func(text)
    return {"source": text, "tenji": tenji}

@app.get("/evaluation/")
async def evaluation(source: str, wakati: str, evaluation: str):
    print("source: " + source, "wakati: " + wakati, "evaluation: " + evaluation, sep = ",")
    return

    source = text
    tenji, wakati = translate_func(source)
    return {"source": text, "target": tenji, "wakati": wakati}

@app.get("/translate/wakati/")
async def translate(text: str):
    wakati = text
    tenji = tenji_func(text)
    return {"target": tenji}
