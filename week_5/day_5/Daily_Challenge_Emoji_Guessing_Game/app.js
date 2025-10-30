const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🌟', name: 'Star' }
];

let leaderboard = [];
let currentEmoji = null;
let options = [];

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    currentEmoji = emojis[randomIndex];
    options = [currentEmoji.name];
    while (options.length < 4) {
        const rand = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(rand)) options.push(rand);
    }
    options.sort(() => Math.random() - 0.5);
}

generateQuestion();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Emoji Guessing Game</title></head>
        <body>
            <h1>Guess the Emoji</h1>
            <form action="/guess" method="post">
                <p>${currentEmoji.emoji}</p>
                ${options.map(opt => `<input type="radio" name="guess" value="${opt}" required> ${opt}<br>`).join('')}
                <input type="hidden" name="score" value="0">
                <button type="submit">Guess</button>
            </form>
            <a href="/leaderboard">View Leaderboard</a>
        </body>
        </html>
    `);
});

app.post('/guess', (req, res) => {
    const guess = req.body.guess;
    let feedback = '';
    let score = parseInt(req.body.score) || 0;
    if (guess === currentEmoji.name) {
        feedback = 'Correct!';
        score++;
    } else {
        feedback = `Wrong! It was ${currentEmoji.name}`;
    }
    generateQuestion();
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Emoji Guessing Game</title></head>
        <body>
            <h1>Guess the Emoji</h1>
            <p>${feedback}</p>
            <p>Score: ${score}</p>
            <form action="/guess" method="post">
                <p>${currentEmoji.emoji}</p>
                ${options.map(opt => `<input type="radio" name="guess" value="${opt}" required> ${opt}<br>`).join('')}
                <input type="hidden" name="score" value="${score}">
                <button type="submit">Guess</button>
            </form>
            <a href="/leaderboard">View Leaderboard</a>
        </body>
        </html>
    `);
});

app.get('/leaderboard', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Leaderboard</title></head>
        <body>
            <h1>Leaderboard</h1>
            <ul>
                ${leaderboard.map(entry => `<li>${entry.name}: ${entry.score}</li>`).join('')}
            </ul>
            <a href="/">Play Again</a>
        </body>
        </html>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});