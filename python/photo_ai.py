import os
import urllib.parse
from flask import Flask, render_template_string, request

app = Flask(__name__)

html_template = """
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #0f0f0f; color: #fff; display: flex; justify-content: center; padding: 15px; }
        .app-card { background: #1a1a1a; width: 100%; max-width: 400px; border-radius: 20px; padding: 20px; text-align: center; border: 1px solid #333; }
        h2 { color: #00ffa3; text-transform: uppercase; font-size: 1.2rem; }
        
        .image-box { 
            width: 100%; min-height: 300px; background: #252525; border-radius: 15px; 
            margin: 15px 0; display: flex; align-items: center; justify-content: center; 
            position: relative; border: 2px solid #333; overflow: hidden;
        }
        .ai-img { width: 100%; height: auto; display: none; }
        
        /* The Download Button */
        .dl-icon { 
            position: absolute; top: 10px; right: 10px; background: #00ffa3; 
            color: #000; padding: 8px; border-radius: 50%; font-weight: bold; 
            text-decoration: none; display: none; z-index: 5;
        }

        /* Loading Spinner */
        .loader {
            border: 4px solid #333; border-top: 4px solid #00ffa3;
            border-radius: 50%; width: 40px; height: 40px;
            animation: spin 1s linear infinite; display: none;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .input-area { 
            background: #222; border: 1px solid #444; border-radius: 10px; 
            padding: 12px; width: 90%; color: #fff; margin-bottom: 10px; font-size: 16px;
        }
        .btn { 
            background: #00ffa3; color: #000; border: none; padding: 15px; 
            border-radius: 10px; font-weight: bold; width: 100%; cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="app-card">
        <h2>Mahdot AI Designer</h2>
        
        <div class="image-box" id="container">
            <div class="loader" id="spinner"></div>
            <img id="outputImage" class="ai-img" src="" alt="AI Result">
            <a id="dlBtn" href="" download="ai_image.jpg" class="dl-icon">⬇</a>
            <p id="placeholder" style="color:#666;">Describe your vision below...</p>
        </div>

        <input type="text" id="userPrompt" class="input-area" placeholder="e.g. Luxury leather watch strap">
        <button onclick="generateImage()" class="btn" id="genBtn">Generate Real AI Image</button>
    </div>

    <script>
        function generateImage() {
            const prompt = document.getElementById('userPrompt').value;
            if (!prompt) return alert("Please type something!");

            const img = document.getElementById('outputImage');
            const loader = document.getElementById('spinner');
            const placeholder = document.getElementById('placeholder');
            const dlBtn = document.getElementById('dlBtn');
            const btn = document.getElementById('genBtn');

            // 1. Show Loading State
            img.style.display = 'none';
            dlBtn.style.display = 'none';
            placeholder.style.display = 'none';
            loader.style.display = 'block';
            btn.innerText = "AI is Painting...";
            btn.disabled = true;

            // 2. Build the URL (Using Flux Model for best quality)
            const cleanPrompt = encodeURIComponent(prompt + ", high quality leather craft, 8k resolution, cinematic lighting");
            const randomSeed = Math.floor(Math.random() * 10000);
            const aiUrl = `https://pollinations.ai/p/${cleanPrompt}?width=1080&height=1080&seed=${randomSeed}&model=flux&nologo=true`;

            // 3. Pre-load the image in the background
            const tempImg = new Image();
            tempImg.src = aiUrl;
            
            tempImg.onload = function() {
                // 4. When the image is READY, show it!
                img.src = aiUrl;
                dlBtn.href = aiUrl;
                
                img.style.display = 'block';
                dlBtn.style.display = 'flex';
                loader.style.display = 'none';
                btn.innerText = "Generate Real AI Image";
                btn.disabled = false;
            };

            tempImg.onerror = function() {
                alert("AI Server busy. Try again in a second.");
                loader.style.display = 'none';
                placeholder.style.display = 'block';
                btn.disabled = false;
            };
        }
    </script>
</body>
</html>
"""

@app.route('/')
def index():
    return render_template_string(html_template)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)