from flask import Flask, render_template

app = Flask(__name__)

# Home page
@app.route("/")
def home():
    return render_template("index.html")

# Quiz pages
@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/gk")
def gk():
    return render_template("gk.html")

@app.route("/math")
def math():
    return render_template("math.html")

@app.route("/gs")
def gs():
    return render_template("gs.html")

if __name__ == "__main__":
    app.run()
