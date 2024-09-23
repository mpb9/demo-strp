from flask import Flask

server = Flask(__name__)


@server.route("/")
def home():
    return "Cozy Threads - SERVER"


if __name__ == "__main__":
    server.run(port=8000, debug=True)
