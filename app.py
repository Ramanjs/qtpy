#!/usr/bin/env python3

##################################################
# Link to github repo: https://github.com/Ramanjs/qtpy

# Authors:
# Ramanjeet Singh (2021085) https://github.com/Ramanjs
# Yash Yadav (2021117): https://github.com/YshYdv
# Himani (2021053) https://github.com/inamih

# Use app in fullscreen for better experience

# Installation:
# pip3 install requests eel

# Running the app:
# python3 app.py

# Api keys
# Please use your own keys if possible
##################################################

import eel
import requests

eel.init("frontend")

print("App is up and running. View in fullscreen mode for better experience.")

apiKeys = {
    "wolframAlpha": "9JT46W-3EHPT2URJV",
    "openWeatherMap": "f66f5c62953db3b0150351f894e35f60",
    "spoonacular": "453f781095384b309ed25aeff13935ed"
}

@eel.expose
def fetchData(req):
    if (req["api"] == "wolfram"):
        appid = apiKeys["wolframAlpha"]
        response = requests.get("http://api.wolframalpha.com/v1/result?appid=" + appid + "&i=" + req["search"])
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
        appid = apiKeys["openWeatherMap"]
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
            "loc": req["city"]
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
    elif (req["api"] == "food"):
        recipe = req["recipe"]
        apiKey = apiKeys["spoonacular"]
        response = requests.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=" + apiKey + "&query=" + recipe + "&number=1")
        response = response.json()
        recipeId = str(response["results"][0]["id"])
        response = requests.get("https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey=" + apiKey)
        response = response.json()
        r = {
            "title": response["title"],
            "url": response["image"],
            "instructions": response["instructions"],
            "summary": response["summary"]
        }
        ingredientList = response["extendedIngredients"]
        ingredients = [] 
        index = 0
        for x in ingredientList:
            ingredients.append(x["original"])
        r["ingredients"] = ingredients
        eel.getInfoFromBackend(req["api"], r)

eel.start('index.html')
