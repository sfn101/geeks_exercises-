// --- DOM Elements ---
const cells = document.querySelectorAll(".cell");
const selectionScreen = document.querySelector(".selection-screen");
const gameContainer = document.querySelector(".game-container");
const endGameMessage = document.getElementById("endGameMessage");
const messageText = document.querySelector(".message");
const restartButton = document.getElementById("restartButton");
const chooseXButton = document.getElementById("chooseX");
const chooseOButton = document.getElementById("chooseO");
const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");

// --- Game State Variables ---
let board;
let humanPlayer;
let aiPlayer;
let difficulty;
let isGameActive;
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [6, 4, 2], // diagonals
];

// --- Event Listeners for Setup ---
chooseXButton.addEventListener("click", () => setPlayerSymbol("X"));
chooseOButton.addEventListener("click", () => setPlayerSymbol("O"));
easyButton.addEventListener("click", () => setDifficulty("easy"));
hardButton.addEventListener("click", () => setDifficulty("hard"));
restartButton.addEventListener("click", startGame);

function setPlayerSymbol(symbol) {
  humanPlayer = symbol;
  aiPlayer = symbol === "X" ? "O" : "X";
  // Highlight selected button
  chooseXButton.style.backgroundColor = symbol === "X" ? "#4caf50" : "";
  chooseOButton.style.backgroundColor = symbol === "O" ? "#4caf50" : "";
  checkToStartGame();
}

function setDifficulty(level) {
  difficulty = level;
  // Highlight selected button
  easyButton.style.backgroundColor = level === "easy" ? "#4caf50" : "";
  hardButton.style.backgroundColor = level === "hard" ? "#4caf50" : "";
  checkToStartGame();
}

function checkToStartGame() {
  if (humanPlayer && difficulty) {
    selectionScreen.classList.add("hidden");
    gameContainer.style.display = "grid";
    startGame();
  }
}

// --- Game Logic ---
function startGame() {
  isGameActive = true;
  // Initialize the board as an array of numbers 0-8
  board = Array.from(Array(9).keys());
  endGameMessage.classList.add("hidden");

  cells.forEach((cell) => {
    cell.innerText = "";
    cell.style.removeProperty("background-color");
    cell.addEventListener("click", turnClick, { once: true });
  });
}

function turnClick(event) {
  if (isGameActive && typeof board[event.target.dataset.index] === "number") {
    turn(event.target.dataset.index, humanPlayer);
    // Check for tie or win after human's turn
    if (isGameActive && !checkWin(board, humanPlayer) && !checkTie()) {
      // Use a short delay for a better user experience
      setTimeout(() => turn(bestSpot(), aiPlayer), 500);
    }
  }
}

function turn(squareId, player) {
  board[squareId] = player;
  document.querySelector(`.cell[data-index='${squareId}']`).innerText = player;
  document
    .querySelector(`.cell[data-index='${squareId}']`)
    .removeEventListener("click", turnClick);
  let gameWon = checkWin(board, player);
  if (gameWon) {
    gameOver(gameWon);
  } else {
    checkTie();
  }
}

function checkWin(currentBoard, player) {
  // This is a great use of the reduce method as hinted!
  // It finds all the indexes on the board that the current player has played in.
  let plays = currentBoard.reduce(
    (acc, el, i) => (el === player ? acc.concat(i) : acc),
    []
  );

  let gameWon = null;
  // Now we check if any of the winning combinations are a subset of the player's moves.
  for (let [index, win] of winCombos.entries()) {
    if (win.every((elem) => plays.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player };
      break;
    }
  }
  return gameWon;
}

function checkTie() {
  if (emptySquares().length === 0 && isGameActive) {
    isGameActive = false;
    cells.forEach((cell) => {
      cell.removeEventListener("click", turnClick);
      cell.style.backgroundColor = "var(--tie-bg)";
    });
    declareWinner("Tie Game!");
    return true;
  }
  return false;
}

function gameOver(gameWon) {
  isGameActive = false;
  for (let index of winCombos[gameWon.index]) {
    document.querySelector(
      `.cell[data-index='${index}']`
    ).style.backgroundColor =
      gameWon.player === humanPlayer ? "var(--win-bg)" : "var(--lose-bg)";
  }
  cells.forEach((cell) => cell.removeEventListener("click", turnClick));
  declareWinner(gameWon.player === humanPlayer ? "You win!" : "You lose.");
}

function declareWinner(who) {
  endGameMessage.classList.remove("hidden");
  messageText.innerText = who;
}

function emptySquares() {
  return board.filter((s) => typeof s === "number");
}

function bestSpot() {
  if (difficulty === "easy") {
    // Easy mode: just pick a random empty spot
    const empty = emptySquares();
    const randomIndex = Math.floor(Math.random() * empty.length);
    return empty[randomIndex];
  } else {
    // Hard mode: use the minimax algorithm
    return minimax(board, aiPlayer).index;
  }
}

// --- The Unbeatable Minimax AI ---
function minimax(newBoard, player) {
  let availSpots = emptySquares(newBoard);

  if (checkWin(newBoard, humanPlayer)) {
    return { score: -10 };
  } else if (checkWin(newBoard, aiPlayer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  let moves = [];
  for (let i = 0; i < availSpots.length; i++) {
    let move = {};
    move.index = newBoard[availSpots[i]];
    newBoard[availSpots[i]] = player;

    if (player === aiPlayer) {
      let result = minimax(newBoard, humanPlayer);
      move.score = result.score;
    } else {
      let result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    newBoard[availSpots[i]] = move.index;
    moves.push(move);
  }

  let bestMove;
  if (player === aiPlayer) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}
