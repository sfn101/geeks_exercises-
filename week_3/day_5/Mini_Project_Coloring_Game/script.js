const palette = document.getElementById('palette');
const canvas = document.getElementById('canvas');
const clearBtn = document.getElementById('clear-btn');

const CANVAS_SIZE = 30;
const colors = [
  '#000000',
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
  '#FFFFFF',
  '#808080',
  '#FFA500',
  '#800080',
  '#FFC0CB',
  '#A52A2A',
  '#008000',
  '#87CEEB',
  '#32CD32',
];

let currentColor = colors[0];
let isMouseDown = false;

function createPalette() {
  colors.forEach((color, index) => {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;
    if (index === 0) {
      colorDiv.classList.add('selected');
    }
    colorDiv.addEventListener('click', () => {
      currentColor = color;
      document.querySelector('.color.selected').classList.remove('selected');
      colorDiv.classList.add('selected');
    });
    palette.appendChild(colorDiv);
  });
}

function createCanvas() {
  for (let i = 0; i < CANVAS_SIZE * CANVAS_SIZE; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', () => {
      if (isMouseDown) {
        cell.style.backgroundColor = currentColor;
      }
    });
    cell.addEventListener('mousedown', () => {
      cell.style.backgroundColor = currentColor;
    });
    canvas.appendChild(cell);
  }
}

document.body.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.body.addEventListener('mouseup', () => {
  isMouseDown = false;
});

clearBtn.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = '#FFFFFF';
  });
});

canvas.addEventListener('dragstart', e => {
  e.preventDefault();
});

createPalette();
createCanvas();
