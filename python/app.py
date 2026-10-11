from flask import Flask, render_template_string, request

app = Flask(__name__)

# The visual layout and design
html_template = """
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: sans-serif; display: flex; justify-content: center; padding: 20px; background-color: #f4f4f4; }
        .card { border: 8px solid #333; border-radius: 20px; padding: 20px; width: 320px; text-align: center; background: white; box-shadow: 0px 10px 20px rgba(0,0,0,0.2); }
        h1 { color: #2e7d32; margin-bottom: 20px; }
        .menu-item { background: #e0e0e0; margin: 8px 0; padding: 12px; text-align: left; border-radius: 5px; font-weight: bold; }
        .success-msg { color: #1565c0; font-weight: bold; padding: 20px; font-size: 1.1em; }
        input[type="text"] { width: 85%; padding: 12px; margin-top: 15px; border: 2px solid #333; border-radius: 8px; font-size: 16px; }
        button { margin-top: 15px; padding: 12px 30px; background: #2e7d32; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; width: 95%; }
        button:active { background: #1b5e20; }
    </style>
</head>
<body>
    <div class="card">
        <h1>SafaricolabTele</h1>
        
        <div id="display">
            {% if screen == 'main' %}
                <div class="menu-item">1. Internet package</div>
                <div class="menu-item">2. Voice package</div>
                <div class="menu-item">*. Exit</div>
            {% elif screen == 'internet' %}
                <div class="menu-item">1. Weekly 1GB - 100 Birr</div>
                <div class="menu-item">2. Monthly 2.3GB - 50 Birr</div>
                <div class="menu-item">0. Back</div>
            {% elif screen == 'voice' %}
                <div class="menu-item">1. 10min - 5 Birr</div>
                <div class="menu-item">2. 50min - 30 Birr</div>
                <div class="menu-item">0. Back</div>
            {% elif screen == 'success' %}
                <div class="success-msg">{{ message }}</div>
                <div class="menu-item">0. Back to Main Menu</div>
            {% endif %}
        </div>

        <form method="POST">
            <input type="text" name="user_input" placeholder="Enter choice here..." autofocus required>
            <input type="hidden" name="current_screen" value="{{ screen }}">
            <button type="submit">Send</button>
        </form>
    </div>
</body>
</html>
"""

@app.route('/', methods=['GET', 'POST'])
def ussd_menu():
    screen = 'main'
    message = ""

    if request.method == 'POST':
        choice = request.form.get('user_input')
        current = request.form.get('current_screen')

        # --- Main Menu ---
        if current == 'main':
            if choice == '1': screen = 'internet'
            elif choice == '2': screen = 'voice'
            elif choice == '*': return "USSD Session Ended."
            else: screen = 'main'

        # --- Internet Menu ---
        elif current == 'internet':
            if choice == '1':
                screen = 'success'
                message = "Congratulation successesfuly percesed 1GB Weekly!"
            elif choice == '2':
                screen = 'success'
                message = "Congratulation successesfuly percesed 2.3GB Monthly for 50 Birr!"
            elif choice == '0':
                screen = 'main'
            else:
                screen = 'internet'

        # --- Voice Menu ---
        elif current == 'voice':
            if choice == '1':
                screen = 'success'
                message = "Congratulation successesfuly percesed 10min Voice!"
            elif choice == '2':
                screen = 'success'
                message = "Congratulation successesfuly percesed 50min for 30 Birr!"
            elif choice == '0':
                screen = 'main'
            else:
                screen = 'voice'

        # --- Back from Success ---
        elif current == 'success':
            if choice == '0':
                screen = 'main'
            else:
                screen = 'success'
                message = "Transaction complete. Enter 0 to go back."

    return render_template_string(html_template, screen=screen, message=message)

if __name__ == '__main__':
    # Running on port 5000
    app.run(host='0.0.0.0', port=5000, debug=True)