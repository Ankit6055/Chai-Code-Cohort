let arr = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
];

let left = 0;
let top = 0;
let right = arr[0].length - 1;
let bottom = arr.length - 1;

let result = [];

while(left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
        // console.log()
        process.stdout.write(`${arr[top][i]} `);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
        process.stdout.write(`${arr[i][right]} `)
    }
    right--;

    for (let i = right; i >= left; i--) {
        process.stdout.write(`${arr[bottom][i]} `)
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
        process.stdout.write(`${arr[i][left]} `)
    }
    left++;
}





// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         process.stdout.write(`${arr[i][j]} `)
//     }
//     console.log();
// }