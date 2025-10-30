const questions = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correct: 2
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correct: 1
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next');

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    q.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.onclick = () => selectOption(index, div);
        optionsEl.appendChild(div);
    });
    selectedOption = null;
    feedbackEl.textContent = '';
    submitBtn.style.display = 'block';
    nextBtn.style.display = 'none';
}

function selectOption(index, el) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    selectedOption = index;
}

submitBtn.onclick = () => {
    if (selectedOption === null) return;
    const q = questions[currentQuestionIndex];
    if (selectedOption === q.correct) {
        feedbackEl.textContent = 'Correct!';
        score++;
    } else {
        feedbackEl.textContent = 'Wrong!';
    }
    scoreEl.textContent = `Score: ${score}`;
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'block';
};

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = 'Quiz Complete!';
        optionsEl.innerHTML = '';
        feedbackEl.textContent = `Final Score: ${score}/${questions.length}`;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
};

loadQuestion();