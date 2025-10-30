const express = require('express');

const app = express();

app.use(express.json());

let data = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

app.get('/posts', (req, res) => {
    res.json(data);
});

app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = data.find(p => p.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.post('/posts', (req, res) => {
    const newPost = {
        id: data.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    data.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = data.find(p => p.id === id);
    if (post) {
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(p => p.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});