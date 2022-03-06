import eel
import requests

eel.init("frontend")

print("Hello. Starting the app..")

@eel.expose
def fetchData(req):
    if (req["api"] == "wolfram"):
        appid = "9JT46W-3EHPT2URJV&i="
        response = requests.get("http://api.wolframalpha.com/v1/result?appid=" + appid + req["search"])
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
    elif (req["api"] == "excuse"):
        response = requests.get("https://excuser.herokuapp.com/v1/excuse/" + req["category"])
        response = response.json()
        response = response[0]
        for x in response.keys():
            if (x != "id" and x != "category"):
                response = response[x]
                break
        eel.getInfoFromBackend(req["api"], response)
    elif (req["api"] == "weather"):
        appid = "f66f5c62953db3b0150351f894e35f60"
        city = str(req["city"])
        location = requests.get("http://api.openweathermap.org/geo/1.0/direct?q=" + city +  "&limit=1&appid=" + appid)
        location = location.json()
        lat = str(location[0]["lat"])
        lon = str(location[0]["lon"])
        response = requests.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + appid)
        response = response.json()
        iconSrc = {
            "01d": "svg/day-sunny.svg",
            "01n": "svg/night-clear.svg",
            "02d": "svg/day-cloudy.svg",
            "02n": "svg/night-cloudy.svg",
            "03d": "svg/scattered-cloudy.svg",
            "03n": "svg/scattered-cloudy.svg",
            "04d": "svg/broken-cloudy.svg",
            "04n": "svg/broken-cloudy.svg",
            "09d": "svg/showers.svg",
            "09n": "svg/showers.svg",
            "10d": "svg/day-showers.svg",
            "10n": "svg/night-showers.svg",
            "11d": "svg/thunderstorm.svg",
            "11n": "svg/thunderstorm.svg",
            "13d": "svg/snowflake.svg",
            "13n": "svg/snowflake.svg",
            "50d": "svg/mist.svg",
            "50n": "svg/mist.svg",
        }
        iconCode = response["current"]["weather"][0]["icon"]
        iconCode = iconSrc[iconCode]
        r = {
            "description": response["current"]["weather"][0]["description"],
            "humidity": response["current"]["humidity"],
            "windspeed": round(response["current"]["wind_speed"]*18/5, 2),
            "temp": round(response["current"]["temp"] - 273.15),
            "url": iconCode,
        }
        daily = {}
        for i in range(7):
            daily[str(i)] = {}
        # print(daily)
        dailyList = response["daily"]
        # print(dailyList)
        index = 0
        for x in dailyList:
            if (index >= 7):
                break

            maxTemp = response["daily"][index]["temp"]["max"]
            maxTemp = round(maxTemp - 273.15)
            daily[str(index)]["max"] = maxTemp
            minTemp = response["daily"][index]["temp"]["min"]
            minTemp = round(minTemp - 273.15)
            daily[str(index)]["min"] = minTemp
            iconCode = response["daily"][index]["weather"][0]["icon"]
            iconCode = iconSrc[iconCode]
            daily[str(index)]["url"] = iconCode
            index += 1

        r["daily"] = daily
        eel.getInfoFromBackend(req["api"], r)
    elif (req["api"] == "iss"):
        response = requests.get("http://api.open-notify.org/iss-now.json")
        response = response.json()
        r = {
            "lat": response["iss_position"]["latitude"],
            "lon": response["iss_position"]["longitude"]
        }
        eel.getInfoFromBackend(req["api"], r)

eel.start("index.html")
