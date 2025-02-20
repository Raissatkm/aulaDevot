const { clear, input } = require('./prompt')
const playerX = "x";
const playerO = "o";
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

function showBoard(currentBoard) {
    const board = `${currentBoard[0]}|${currentBoard[1]}|${currentBoard[2]}\n-|-|-\n${currentBoard[3]}|${currentBoard[4]}|${currentBoard[5]}\n-|-|-\n${currentBoard[6]}|${currentBoard[7]}|${currentBoard[8]}`
    clear()
    console.log(board)
}

async function game() {
    showBoard(board);
    let pos = null;
    let turn = playerX;

    while(true) {
        do {
            showBoard(board);
            console.log("posições")
            showBoard([1, 2, 3, 4, 5, 6, 7, 8, 9])
            pos = await input(`\nJOGADOR ${turn}: Selecione a posição que deseja joga: `)
            pos = Number.parseInt(pos);
        }while (pos < 1 || pos > 9 || board[pos - 1] !== ' ')
        
        board[pos - 1] = turn;
    
        if (turn === playerX) 
            turn = playerO;
        else 
            turn = playerX
    }
}

game()

