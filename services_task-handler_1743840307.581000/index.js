const functions = require('@google-cloud/functions-framework');

functions.http('helloHttp', (req, res) => {
  res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
});
from flask import Flask
from app.board_routes import board_bp
from app.task_routes import task_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(board_bp, url_prefix="/boards")
app.register_blueprint(task_bp, url_prefix="/boards/<board_id>/tasks")

@app.route("/")
def index():
    return "Task Management Backend is running!"
