// Second try

const board = document.getElementById('board');
const turnEl = document.getElementById('turn');
const resetBtn = document.getElementById('reset');
let turn = 'X';
let gameOver = false;
const cells = [];

let i = 0;
while (i < 100) {
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
    i++;
}

function checkWin() {
    let r = 0;
    while (r < 10) {
        let c = 0;
        while (c < 6) {
            let idx = r * 10 + c;
            if (cells[idx].textContent !== '' &&
                cells[idx].textContent === cells[idx + 1].textContent &&
                cells[idx].textContent === cells[idx + 2].textContent &&
                cells[idx].textContent === cells[idx + 3].textContent &&
                cells[idx].textContent === cells[idx + 4].textContent) {
                return true;
            }
            c++;
        }
        r++;
    }

    r = 0;
    while (r < 6) {
        let c = 0;
        while (c < 10) {
            let idx = r * 10 + c;
            if (cells[idx].textContent !== '' &&
                cells[idx].textContent === cells[idx + 10].textContent &&
                cells[idx].textContent === cells[idx + 20].textContent &&
                cells[idx].textContent === cells[idx + 30].textContent &&
                cells[idx].textContent === cells[idx + 40].textContent) {
                return true;
            }
            c++;
        }
        r++;
    }

    return false;
}

resetBtn.addEventListener('click', () => {
    let k 