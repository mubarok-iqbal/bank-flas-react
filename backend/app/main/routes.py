from app import app

@app.route('/')
def main():
  return {
    'message': 'Well done, your first app is live!'
  }