// First try

const board = document.getElementById('board');
const turnEl = document.getElementById('turn');
const resetBtn = document.getElementById('reset');
let turn = 'X';
let gameOver = false;
const cells = [];

for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';

    cell.addEventListener('click', () => {
        if (!cell.textContent && !gameOver) {
            cell.textContent = turn;

            if (checkWin()) {
                turnEl.textContent = `Player ${turn} wins!`;
                gameOver = true;
            } else {
                turn = turn === 'X' ? 'O' : 'X';
                turnEl.textContent = `Turn: ${turn}`;
            }
        }
    });

    board.appendChild(cell);
    cells.push(cell);
}

function checkWin() {
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 6; c++) {
            let i = r * 10 + c;
            if (cells[i].textContent !== '' &&
                cells[i].textContent === cells[i + 1].textContent &&
                cells[i].textContent === cells[i + 2].textContent &&
                cells[i].textContent === cells[i + 3].textContent &&
                cells[i].textContent === cells[i + 4].textContent) {
                return true;
            }
        }
    }

    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 10; c++) {
            let i = r * 10 + c;
            if (cells[i].textContent !== '' &&
                cells[i].textContent === cells[i + 10].textContent &&
                cells[i].textContent === cells[i + 20].textContent &&
                cells[i].textContent === cells[i + 30].textContent &&
                cells[i].textContent === cells[i + 40].textContent) {
                return true;
            }
        }
    }



    return false;
}

resetBtn.addEventListener('click', () => {
    cells.forEach(cell => cell.textContent = '');
    turn = 'X';
    gameOver = false;
    turnEl.textContent = 'Turn: X';
});