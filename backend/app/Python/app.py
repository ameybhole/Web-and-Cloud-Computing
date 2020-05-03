from textblob import TextBlob
import re
import sys


def sentiment(text):
    c_text = ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", text).split())

    analysis = TextBlob(c_text)
    return analysis.sentiment.polarity


print(sentiment(str(sys.argv[1])))
