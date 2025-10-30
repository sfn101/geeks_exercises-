const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

let users = [];

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });
    jwt.verify(token, 'secret', (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
};

app.post('/api/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            id: users.length + 1,
            username: req.body.username,
            password: hashedPassword
        };
        users.push(user);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    const user = users.find(u => u.username === req.body.username);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ id: user.id, username: user.username }, 'secret');
            res.json({ token });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/profile', authenticateToken, (req, res) => {
    res.json({ id: req.user.id, username: req.user.username });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});