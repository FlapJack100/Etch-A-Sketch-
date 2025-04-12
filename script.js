const container = document.getElementById('container');
const blackBtn = document.getElementById('black');
const rainbowBtn = document.getElementById('rainbow');
const blueBtn = document.getElementById('blue');
const eraseBtn = document.getElementById('erase');
const clearBtn = document.getElementById('clear');
const sizeRange = document.getElementById('sizeRange');
const sizeValue = document.getElementById('sizeValue');
alert(' Deni! You are the best mentor,know that :)')
let currentMode = 'black';
let currentSize = 16;

function setCurrentMode(mode) {
  currentMode = mode;
}


function createGrid(size) {
  container.innerHTML = '';

  const squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseover', paintSquare);

    container.appendChild(square);
  }
}

function paintSquare(e) {
  if (currentMode === 'black') {
    e.target.style.backgroundColor = 'black';
  } else if (currentMode === 'rainbow') {
    e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else if (currentMode === 'blue') {
    e.target.style.backgroundColor = '#3498db';
  } else if (currentMode === 'erase') {
    e.target.style.backgroundColor = 'white';
  }
}

blackBtn.addEventListener('click', () => setCurrentMode('black'));
rainbowBtn.addEventListener('click', () => setCurrentMode('rainbow'));
blueBtn.addEventListener('click', () => setCurrentMode('blue'));
eraseBtn.addEventListener('click', () => setCurrentMode('erase'));

clearBtn.addEventListener('click', () => {
  createGrid(currentSize);
});

sizeRange.addEventListener('input', (e) => {
  currentSize = e.target.value;
  sizeValue.textContent = `${currentSize} x ${currentSize}`;
  createGrid(currentSize);
});

// Начальная загрузка
createGrid(currentSize);
