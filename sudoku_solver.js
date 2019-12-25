const BOARD = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9],
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,5,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
];

function printBoard(board) {
    for (let i = 0; i < BOARD.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            console.log('---------------------');
        }
        let row = [];
        for (let j = 0 ; j < BOARD[0].length; j++) {
            if (j % 3 === 0 && j !== 0) {
                row.push("|");
            }
            row.push(board[i][j]);
        }
        console.log(row.join(" "));
    }
}

function findEmpty(board) {
    for (let i = 0; i < BOARD.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 0) {
                return [i, j];
            }
        }
    }
    return null;
}

function valid(board, num, pos) {
    // check row
    for (let i = 0; i < board[0].length; i++){
        if (board[pos[0]][i] === num && pos[1] !== i) {
            return false;
        }
    }
    // check col
    for (let i = 0; i < board[0].length; i++){
    
        if (board[i][pos[1]] === num && pos[0] !== i) {
            return false;
        }
    }
    // check box
    let box_x = pos[1] / 3;
    let box_y = pos[0] / 3;
    for (let i = box_y * 3; i < box_y * 3 + 3; i++){
        for (let j = box_x * 3; j < box_x * 3 + 3; j++) {
        if (board[i][j] === num && pos[0][1] !== [i,j]) {
            return false;
        }
    }
    return true;
    }
}

function solve(board) {
    let find = findEmpty(board);
    let row;
    let col;
    if(!find){
        return true;
    } else {
        row = find[0];
        col = find[1];
    }
    for (let i = 1; i < 10; i++) {
        if (valid(board, i, [row, col])) {
            board[row][col] = i;
            if (solve(board)) return true;
            board[row][col] = 0;
        }
    }
    return false;
}

printBoard(BOARD);
solve(BOARD);
console.log("---------------");
printBoard(BOARD);
