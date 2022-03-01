import eel
import requests

@eel.expose
def printData(search):
    r = requests.get('http://api.wolframalpha.com/v1/result?appid=9JT46W-3EHPT2URJV&i=' + str(search))
    eel.getInfoFromBackend(r.text)
    print(r)
    print(r.text)
