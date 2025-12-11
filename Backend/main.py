from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow mobile app to call API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Mobile App Backend Running!"}

@app.get("/products")
def products():
    return [
        {"id": 1, "name": "Samsung S23"},
        {"id": 2, "name": "iPhone 15"},
    ]
