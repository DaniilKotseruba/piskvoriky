////////////FINAL//////////////////// i hope so
const board = document.getElementById('board');
const turnEl = document.getElementById('turn');
const resetBtn = document.getElementById('reset');
const bombBtn = document.getElementById('bombBtn');

let turn = 'X';
let gameOver = false;
const cells = [];

let bombMode = false;
let bombsCount = 0;


// CELLS
let i = 0;
while (i < 100) {
    const cell = document.createElement('div');
    cell.className = 'cell';

 //ATRIBUTZ BOMBS
    var r = Math.floor(i / 10);
    var c = i % 10;

    cell.setAttribute('data-index', i);
    cell.setAttribute('data-row', r);
    cell.setAttribute('data-col', c);
    cell.setAttribute('data-bomb', 'false');

    cell.onclick = function () {
        if (gameOver == true) {
            return;
        }
        // * AI Generated
        // * Model:  OpenAI GPT-5.6-sol
        // fix: proverka data-bomb pered hit/////////////////////////////////////////////
        if (bombMode == true) {
            if (this.getAttribute('data-bomb') == 'false' && this.textContent == '') {
                this.setAttribute('data-bomb', 'true');
                bombsCount = bombsCount + 1;
                turnEl.innerHTML = 'Bombs hidden: ' + bombsCount + ' / 4';
                ////////////////////////////////////////////////////////////////////////

                if (bombsCount == 4) {
                    bombMode = false;
                    turnEl.innerHTML = 'All bombs hidden! Turn: X';
                }
            }
            return;
        }
        //BOMBS

        if (this.textContent == '') {
            if (this.getAttribute('data-bomb') == 'true') {
                this.textContent = 'B';
                if (turn == 'X') {
                    turnEl.innerHTML = 'Player X hit a bomb! Player O wins!';
                } else {
                    turnEl.innerHTML = 'Player O hit a bomb! Player X wins!';
                }
                gameOver = true;
                return;
            }

            this.textContent = turn;

            if (checkWin()) {
                turnEl.innerHTML = 'Player ' + turn + ' wins!';
                gameOver = true;
            } else {
                if (turn == 'X') {
                    turn = 'O';
                } else {
                    turn = 'X';
                }
                turnEl.innerHTML = 'Turn: ' + turn;
            }
        }
    };

    board.appendChild(cell);
    cells.push(cell);
    i = i + 1;
}
if (bombBtn) {
    bombBtn.onclick = function() {
        bombMode = true;
        bombsCount = 0;

        let k = 0;
        while (k < 100) {
            cells[k].setAttribute('data-bomb', 'false');
            cells[k].textContent = '';
            k = k + 1;
        }

        turnEl.innerHTML = 'Click cells to hide 4 bombs (0 / 4)';
    };
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
                var pos2 = row * 10 + col; ///
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

    //RESET
resetBtn.onclick = function() {
    let n = 0;
    while (n < 100) {
        cells[n].textContent = '';
        cells[n].setAttribute('data-bomb', 'false');
        n = n + 1;
    }
    turn = 'X';
    gameOver = false;
    bombMode = false;
    bombsCount = 0;
    turnEl.innerHTML = 'Turn: X';
};