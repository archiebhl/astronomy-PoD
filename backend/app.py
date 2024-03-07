import requests
from flask import Flask, jsonify
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv
import sys

load_dotenv()

app = Flask(__name__)

# Endpoint for getting Mars weather data
APOD_API_KEY = os.environ['NASA_API_KEY']
APOD_API_URL = f"https://api.nasa.gov/planetary/apod?api_key={APOD_API_KEY}"

@app.route("/")
def get_apod():
    response = requests.get(APOD_API_URL)
    
    if response.status_code == 200:
        apod_data = response.json()

        return jsonify(apod_data)
    else:
        return jsonify({"error": "API key is not set"})
    
@app.route("/archive")
def get_apod_archive():

    current_date = datetime.now().date()
    previous_apods = []

    # Fetch APODs for the last 7 days
    for i in range(7):
        # Making URL
        date = (current_date - timedelta(days=i)).strftime("%Y-%m-%d")
        apod_url = f"{APOD_API_URL}&date={date}"

        response = requests.get(apod_url)

        if response.status_code == 200:
            apod_data = response.json()
            previous_apods.append(apod_data)
        else:
            previous_apods.append({"error": f"Failed to fetch APOD for {date}"})

    return jsonify(previous_apods)

if __name__ == "__main__":
    app.run(debug=True)
