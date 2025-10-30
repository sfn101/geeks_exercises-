const express = require('express');

const app = express();

app.use(express.json());

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2021 }
];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const id = parseInt(req.params.bookId);
    const book = books.find(b => b.id === id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});