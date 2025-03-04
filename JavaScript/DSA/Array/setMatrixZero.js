let matrix = [[1,1,1],[1,0,1],[1,1,1]];

// Output: [[1,0,1],[0,0,0],[1,0,1]]

let resultMatrix = [];
let row = [];
let col = [];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
            row.push(i);
            col.push(j);
        }
    }
}