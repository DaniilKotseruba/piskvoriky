const board = document.getElementById('board');
const turnEl = document.getElementById('turn');
const resetBtn = document.getElementById('reset');
let turn = 'X';


for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';

    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = turn;
            turn = turn === 'X' ? 'O' : 'X';
            turnEl.textContent = `Turn: ${turn}`;
        }
    });

    board.appendChild(cell);
}


resetBtn.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    turn = 'X';
    turnEl.textContent = 'Turn: X';
});