const express = require('express');

const { fetchPosts } = require('./data/dataService');

const app = express();

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('Data retrieved and sent');
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});