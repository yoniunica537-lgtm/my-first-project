import os
import requests

# በተርሚናል ላይ ያቀናጀኸውን HF_API_TOKEN ያነባል
API_TOKEN = os.getenv("HF_API_TOKEN")

if not API_TOKEN:
    print("ስህተት፡ HF_API_TOKEN አልተገኘም። እባክህ በተርሚናል ላይ export አድርገው።")
    exit()

# ለመሞከሪያ የሚሆን ሞዴል URL (ለምሳሌ GPT-2 ወይም የፈለግከው ሞዴል)
API_URL = "https://api-inference.huggingface.co/models/gpt2"
headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

# ጥያቄ መላክ
output = query({"inputs": "Hello, I am using Hugging Face API!"})
print("የተመለሰው ምላሽ:")
print(output)