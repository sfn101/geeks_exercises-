from flask import Flask, render_template, request, redirect, url_for 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from datetime import datetime, UTC
from markupsafe import escape


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.now(UTC))

    def __repr__(self):
        return f"<Todo {self.id}: {self.content}>"

@app.route('/', methods=['GET', 'POST', 'PUT', 'DELETE'])

def index():
    if request.method == 'POST':
        task_content = escape(request.form['content'].strip())
        new_task = Todo(content=task_content)
        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/')
        except Exception as e:
            return f"An error occurred while adding the task: {e}"
    else:
        tasks = Todo.query.order_by(Todo.date_created).all()
        return render_template('index.html', tasks=tasks)

@app.route('/update/<int:id>', methods=['GET', 'PUT'])
def update(id):
    task = Todo.query.get_or_404(id)
    
    if request.method == 'GET':
        return render_template('update.html', task=task)
    
    elif request.method == 'PUT':
        try:
            task.content = escape(request.form['content'].strip())
            db.session.commit()
            return redirect('/')
        except Exception as e:
            return f"An error occurred while updating the task: {e}"

@app.route('/delete/<int:id>', methods=['DELETE'])
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except Exception as e:
        return f"An error occurred while deleting the task: {e}"


if __name__ == '__main__':
    app.run(debug=True)