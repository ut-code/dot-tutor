from urllib import request
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

def wakati_func(source):
    target = source + source
    return target

def tenji_func(source):
    target = source + source
    return target

def translate_func(text):
    wakati = wakati_func(text)
    tenji = tenji_func(wakati)
    return tenji


# translate text to braille
@app.get("/translate/")
async def translate(text: str):
    return {"source": text, "target": translate_func(text)}

