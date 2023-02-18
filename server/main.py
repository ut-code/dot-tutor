from urllib import request
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
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


def translate_func(text):
    # translate text to braille
    return text+text

# translate text to braille
@app.get("/translate/")
async def translate(text: str):
    return {"source": text, "target": translate_func(text)}