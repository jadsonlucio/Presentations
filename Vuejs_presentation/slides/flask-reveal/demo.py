import yaml
from flask import Flask, render_template


app = Flask(__name__)
settings = yaml.load(open("settings.yml", "r"))

@app.route("/")
def presentation():
    settings = yaml.load(open("settings.yml", "r"))
    return render_template("presentation.html", page_list = settings["Slides"])

if __name__ == "__main__":
    app.run(**settings["Run"])


