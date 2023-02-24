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

tagger = MeCab.Tagger()

'''
def wakati_func(source):
    target = tagger.parse(source)
    return target
'''

def wakati_tenji_func(source):
    node = tagger.parseToNode(source)
    target = []
    
    hinshi = ""
    prehinshi = ""
    while node:
        kana = node.feature.split(",")[9]
        hinshi = node.feature.split(",")[0]
    
        if hinshi == "助動詞" or hinshi == "助詞" or hinshi == "接尾辞":
            target.append(kana)
        elif prehinshi == "接頭辞":
            target.append(kana)
        elif kana == "*":
            pass
        elif target == "":
            target.append(kana)
        else:
            target.append(" " + kana)
        prehinshi = hinshi
        node = node.next
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
            if prechar + char in mapping.mapping:
                target.pop(len(target) - 1)
                target.append(mapping.mapping[prechar + char])
            else:
                target.append(char)
        prechar = char
    return "".join(target)

def translate_func(text):
    wakati = wakati_tenji_func(text)
    tenji = tenji_func(wakati)
    return tenji, wakati


# translate text to braille
@app.get("/translate/")
async def translate(text: str):
    tenji, wakati = translate_func(text)
    return {"source": text, "target": tenji, "wakati": wakati}

