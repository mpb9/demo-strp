from dotenv import find_dotenv, load_dotenv
from flask import Flask, jsonify

import stripe
import os
import json


load_dotenv(dotenv_path=find_dotenv())


stripe.api_version = "2024-06-20"
stripe.api_key = os.getenv("STRIPE_SK")

app = Flask(import_name=__name__)


@app.route("/")
def home():
    return "Cozy Threads - SERVER"


@app.route("/config", methods=["GET"])
def get_config():
    return jsonify({"p_key": os.getenv("STRIPE_PK")})


if __name__ == "__main__":
    app.run(port=8000, debug=True)
