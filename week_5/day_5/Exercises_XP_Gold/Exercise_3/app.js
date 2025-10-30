const express = require('express');

const app = express();
app.use(express.json());

let todos = [];

app.post('/api/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.get('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.title = req.body.title || todo.title;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});