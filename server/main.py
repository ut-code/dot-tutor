from urllib import request
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import MeCab
import unidic
import mapping
import os

app = FastAPI()


WEB_ORIGIN = os.getenv("WEB_ORIGIN", "http://localhost:5173")

origins = [
    WEB_ORIGIN,
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


"""
def source2wakati(source):
    target = tagger.parse(source)
    return target
"""


def source2wakati(source): #改行に対応
    lines = source.split('\\n')
    target = []
    for line in lines:
        target.append(source2wakati_byLines(line))
    return "\n".join(target)

def source2wakati_byLines(source):
    tagger = MeCab.Tagger()
    parses = tagger.parse(source)
    pasrses_1 = parses.split("\n")
    target = []

    hinshi = ""
    prehinshi = ""
    prehinshi_specific = ""
    for parse in pasrses_1:
        par = parse.split("\t")
        if len(par) == 2:
            hinshi = par[1].split(",")[0]  # "名詞"とか"接頭辞"とか
            hinshi_specific = par[1].split(",")[1]  # "数詞"とか"代名詞"とか
            if hinshi == "補助記号":
                kana = parse.split()[0]
            elif parse.split()[0] == "を":
                kana = par[1].split(",")[6]
            else:
                kana = (
                    par[1].split(",")[9]
                    if (len(par[1].split(",")) > 9)
                    else parse.split()[0]
                )  # 中段に出る文字
                kana_normal = (
                    par[1].split(",")[6]
                    if (len(par[1].split(",")) > 6)
                    else parse.split()[0]
                )  # そのまま

            letter = [_ for _ in kana]
            letter_normal = [_ for _ in kana_normal]
            letter_default = [_ for _ in parse.split()[0]]  # 入力された文字１つずつ
            for num in range(min(len(letter), len(letter_normal))):
                if letter[num] == "ー" and (
                    letter_normal[num] == "イ" or letter_normal[num] == "オ"
                ):  # イとオは長音にしない
                    letter[num] = letter_normal[num]
                if letter[num] == "ズ" and (letter_normal[num] == "ヅ"):  # 「続く」は「ツヅク」
                    letter[num] = letter_normal[num]
                if letter[num] == "ジ" and (letter_normal[num] == "ヂ"):  # 「縮む」は「チヂム」
                    letter[num] = letter_normal[num]
            for num in range(len(letter_default)):
                if letter_default[num] == "ー":  # 長音は長音のまま
                    letter[num] = letter_default[num]
            kana = "".join(letter)
            if (
                letter_default[0] in mapping.mapping_alpha
                or letter_default[0] in mapping.mapping_alpha_CAP
            ):
                kana = parse.split()[0]
            if hinshi == "助動詞" or hinshi == "助詞" or hinshi == "接尾辞":
                target.append(kana)
            elif prehinshi == "接頭辞":
                target.append(kana)
            elif prehinshi_specific == "数詞" and hinshi == "名詞":  # 数字と単位の間は空けない
                target.append(kana)
            elif kana == "*":
                pass
            elif hinshi == "補助記号":
                target.append(kana)
            elif target == []:
                target.append(kana)
            else:
                target.append("　" + kana)
            prehinshi = hinshi
            prehinshi_specific = hinshi_specific
    return "".join(target)


"""
def wakati2target(source):
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
"""


def wakati_oyomi_func(source):
    # mecab -Owakati, -Oyomi
    owakati_tagger = MeCab.Tagger("-Owakati")
    oyomi_tagger = MeCab.Tagger("-Oyomi")
    owakati = owakati_tagger.parse(source)
    oyomi = oyomi_tagger.parse(source)
    target = oyomi
    return target


def Jp_trans_func(char, prechar, pre_num, target):
    if char in mapping.mapping:
        if char in mapping.mapping_notNum and pre_num == True:
            target.append("⠤" + mapping.mapping[char])
        else:
            target.append(mapping.mapping[char])
    elif (prechar + char) in mapping.mapping:
        target.pop(len(target) - 1)
        target.append(mapping.mapping[prechar + char])
    if char in mapping.mapping_num:
        if pre_num == True:
            target.append(mapping.mapping_num[char])
        else:
            target.append("⠼" + mapping.mapping_num[char])
    if char == "　":
        target.append("⠀")

def wakati2target(source): #改行に対応
    lines = source.split('\\n')
    target = []
    for line in lines:
        target.append(wakati2target_byLines(line))
    return "\n".join(target)

def wakati2target_byLines(source): 
    letter = [_ for _ in source]
    target = []
    pre_num = False  # 前が数字か
    pre_alpha = False  # 前がアルファベットか
    pre_alpha_CAP = False  # 前が大文字か
    double_CAP = False  # 二重大文字符効果の範囲内か
    gaiji = 0
    inyofu = 0
    prechar = ""
    for char in letter:
        if inyofu > 0:
            if char in mapping.mapping_alpha_CAP:
                if pre_alpha == True:
                    gaiji = inyofu
                    target[inyofu - 1] = "⠰"
                    inyofu = 0
                    if double_CAP == True:
                        target.append(mapping.mapping_alpha_CAP[char])
                    elif pre_alpha_CAP == True:
                        target[len(target) - 2] = "⠠⠠"
                        target.append(mapping.mapping_alpha_CAP[char])
                        double_CAP = True
                    else:
                        target.append("⠠")
                        target.append(mapping.mapping_alpha_CAP[char])
                else:
                    target.append("⠠")
                    target.append(mapping.mapping_alpha_CAP[char])
                pre_alpha = True
                pre_alpha_CAP = True
            elif char in mapping.mapping_alpha:
                target.append(mapping.mapping_alpha[char])
                pre_alpha = True
                pre_alpha_CAP = False
            elif char in mapping.mapping_alpha_sub:
                target.append(mapping.mapping_alpha_sub[char])
                pre_alpha = False
                pre_alpha_CAP = False
            else:
                if (pre_alpha_CAP == True and inyofu == len(target) - 2) or (
                    pre_alpha == True and inyofu == len(target) - 1
                ):
                    target[inyofu - 1] = "⠰"
                else:
                    target.append("⠴")
                if prechar != "　":
                    target.append("⠀")
                pre_alpha = False
                pre_alpha_CAP = False
                inyofu = 0
                Jp_trans_func(char, prechar, pre_num, target)
        elif gaiji > 0:
            if char in mapping.mapping_alpha_CAP:
                if double_CAP == True:
                    target.append(mapping.mapping_alpha_CAP[char])
                elif pre_alpha_CAP == True:
                    target[len(target) - 2] = "⠠⠠"
                    target.append(mapping.mapping_alpha_CAP[char])
                    double_CAP = True
                else:
                    target.append("⠠")
                    target.append(mapping.mapping_alpha_CAP[char])
                pre_alpha = True
                pre_alpha_CAP = True
            elif char in mapping.mapping_alpha:
                target.append(mapping.mapping_alpha[char])
                pre_alpha = True
                pre_alpha_CAP = False
            elif char in mapping.mapping_alpha_sub:
                target.append(mapping.mapping_alpha_sub[char])
                pre_alpha = False
                pre_alpha_CAP = False
                gaiji = 0
            else:
                target.append("　")
                pre_alpha = False
                pre_alpha_CAP = False
                gaiji = 0
                Jp_trans_func(char, prechar, pre_num, target)
        else:
            if char in mapping.mapping_alpha_CAP:
                target.append("⠦")
                inyofu = len(target)
                target.append("⠠")
                target.append(mapping.mapping_alpha_CAP[char])
                pre_alpha = True
                pre_alpha_CAP = True
            elif char in mapping.mapping_alpha:
                target.append("⠦")
                inyofu = len(target)
                target.append(mapping.mapping_alpha[char])
                pre_alpha = True
                pre_alpha_CAP = False
            else:
                Jp_trans_func(char, prechar, pre_num, target)
        if char in mapping.mapping_num:
            pre_num = True
        else:
            pre_num = False
        prechar = char
        if (char not in mapping.mapping_alpha_CAP) or (pre_alpha_CAP != True):
            double_CAP = False
    if inyofu > 0:
        if (pre_alpha_CAP == True and inyofu == len(target) - 2) or (
            pre_alpha == True and inyofu == len(target) - 1
        ):
            target[inyofu - 1] = "⠰"
        else:
            target.append("⠴")
    return "".join(target)


def source2target(sourceText):
    wakatiText = source2wakati(sourceText)
    targetText = wakati2target(wakatiText)
    return {"targetText": targetText, "wakatiText": wakatiText}


# translate text to braille
@app.get("/source2target/")
async def callSource2target(sourceText: str):
    data = source2target(sourceText)
    targetText = data["targetText"]
    wakatiText = data["wakatiText"]
    return {
        "sourceText": sourceText,
        "targetText": targetText,
        "wakatiText": wakatiText,
    }


@app.get("/source2wakati/")
async def callSource2wakati(sourceText: str):
    wakatiText = source2wakati(sourceText)
    return {"sourceText": sourceText, "wakatiText": wakatiText}


@app.get("/wakati2target/")
async def callWakati2target(wakatiText: str):
    targetText = wakati2target(wakatiText)
    return {"wakatiText": wakatiText, "targetText": targetText}


@app.get("/evaluation/")
async def evaluation(sourceText: str, wakatiText: str, evaluation: str):
    return
