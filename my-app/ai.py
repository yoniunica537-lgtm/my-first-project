import requests

# የHugging Face API URL እና Token
API_URL = "https://api-inference.huggingface.co/models/meta-llama/Llama-3.1-8B-Instruct"
API_TOKEN = "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"

headers = {"Authorization": f"Bearer {API_TOKEN}"}

def ask_ai(prompt):
    payload = {
        "inputs": f"<|system|>\nYou are a helpful coding assistant.<|user|>\n{prompt}<|assistant|>",
        "parameters": {
            "max_new_tokens": 500,
            "temperature": 0.7
        }
    }
    
    response = requests.post(API_URL, headers=headers, json=payload)
    
    if response.status_code == 200:
        result = response.json()
        if isinstance(result, list) and len(result) > 0:
            generated_text = result[0].get("generated_text", "")
            # መልሱን ብቻ ለይቶ ማውጣት
            if "<|assistant|>" in generated_text:
                return generated_text.split("<|assistant|>")[-1].strip()
            return generated_text
        return result
    else:
        return f"Error {response.status_code}: {response.text}"

if __name__ == "__main__":
    print("🤖 Hugging Face AI (Llama 3.1) ዝግጁ ነው! (ለመውጣት 'exit' በል)\n")
    while True:
        user_input = input("አንተ: ")
        if user_input.lower() in ["exit", "quit"]:
            break
        print("AI በማሰብ ላይ ነው...")
        answer = ask_ai(user_input)
        print(f"\nAI:\n{answer}\n" + "-"*40)