from flask import Flask
from flask import request
from textblob import TextBlob
import re
import pandas as pd     # To handle data
import numpy as np      # For number computing


app = Flask(__name__)

@app.route("/")
def hello():
    text = request.args.get('text')
    c_text = ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", text).split())

    analysis = TextBlob(c_text)
    if analysis.sentiment.polarity > 0:
        return "1"
    elif analysis.sentiment.polarity == 0:
        return "0"
    else:
        return "-1"

if __name__ == "__main__":
    app.run(debug=False,host='0.0.0.0', port=5000)
