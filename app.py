import eel
import requests

eel.init("frontend")

print("Hello. Starting the app..")

@eel.expose
def fetchData(req):
    if (req["api"] == "wolfram"):
        response = requests.get('http://api.wolframalpha.com/v1/result?appid=9JT46W-3EHPT2URJV&i=' + req["search"])
        eel.getInfoFromBackend(req["api"], response.text)
    elif (req["api"] == "stoicism"):
        response = requests.get("https://api.themotivate365.com/stoic-quote")
        eel.getInfoFromBackend(req["api"], response.json())
    elif (req["api"] == "numbers"):
        response = requests.get("http://numbersapi.com/random/trivia")
        eel.getInfoFromBackend(req["api"], response.text)
    elif (req["api"] == "programming"):
        response = requests.get("https://programming-quotes-api.herokuapp.com/Quotes/random")
        eel.getInfoFromBackend(req["api"], response.json())
    elif (req["api"] == "dog"):
        response = requests.get("https://random.dog/woof.json")
        eel.getInfoFromBackend(req["api"], response.json())

eel.start("index.html")
