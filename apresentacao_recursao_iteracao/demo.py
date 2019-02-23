from flask import Flask,render_template
from files.load import get_files

app=Flask(__name__)

@app.route("/")

def apresetacao():
    return render_template("apresentação.html",page_list=get_files())

@app.route("/demo")

def demo():
    return render_template("demo.html")

@app.route("/canvas")

def canvas():
    return render_template("canvas.html")

if __name__=="__main__":
    app.run(debug=True)