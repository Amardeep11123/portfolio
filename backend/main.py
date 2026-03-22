from fastapi import FastAPI
from pydantic import BaseModel
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os

load_dotenv()

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

def send_email(name, email, message):
    subject = "New Contact Form Message"

    body = f"""
    Name: {name}
    Email: {email}
    Message: {message}
    """

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = EMAIL_USER
    msg["To"] = EMAIL_USER  # send to yourself

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASS)
        server.send_message(msg)

app = FastAPI()

# CORS (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection
client = MongoClient(os.getenv("MONGO_URL"))
db = client["portfolio"]
collection = db["contacts"]

# Request Model
class Contact(BaseModel):
    name: str
    email: str
    message: str

@app.post("/contact")
def save_contact(data: Contact):
    collection.insert_one(data.dict())
    send_email(data.name, data.email, data.message)
    return {"message": "Saved and email sent"}