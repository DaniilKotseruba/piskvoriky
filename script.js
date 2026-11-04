

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
    var r = 0;
    while (r < 10) {
        var count = 0;
        var c = 0;
        while (c < 10) {
            var pos = r * 10 + c;
                if (cells[pos].textContent == turn) {
                        count = count + 1;
                        if (count == 5) {
                        return true;
                                        }
                } else {
                count = 0;
            }
            c = c + 1;
        }
        r = r + 1;
    }

    var col = 0;
    while (col < 10) {
        var count2 = 0;
        var row = 0;
        while (row < 10) {
            var pos2 = row * 10 + col;
                    if (cells[pos2].textContent == turn) {
                             count2 = count2 + 1;
                            if (count2 == 5) {
                            return true;
                                             }
                    } else {
                count2 = 0;
            }
            row = row + 1;
        }
        col = col + 1;
    }

    return false;
}

resetBtn.onclick = function() {
    var n = 0;
    while (n < 100) {
        cells[n].textContent = '';
        n = n + 1;
    }
    turn = 'X';
    gameOver = false;
    turnEl.innerHTML = 'Turn: X';
};