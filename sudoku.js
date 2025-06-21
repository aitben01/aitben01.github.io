class Sudoku {
    constructor(board) {
        this.board = board;
    }

    isValid(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (this.board[row][i] === num) return false;
            if (this.board[i][col] === num) return false;
            const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(col / 3) + i % 3;
            if (this.board[boxRow][boxCol] === num) return false;
        }
        return true;
    }

    solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (this.isValid(row, col, num)) {
                            this.board[row][col] = num;
                            if (this.solve()) return true;
                            this.board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    print() {
        for (let row = 0; row < 9; row++) {
            console.log(this.board[row].join(' '));
        }
    }
}

// Example usage:
const board = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

const sudoku = new Sudoku(board);
if (sudoku.solve()) {
    sudoku.print();
} else {
    console.log("No solution exists.");
}