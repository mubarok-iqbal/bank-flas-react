from flask import Flask

app = Flask(__name__)

@app.route('/')
def main():
  return {
    'message': 'Well done, your first app is live!'
  }