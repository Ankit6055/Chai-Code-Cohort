let arr = [23,55,78,11,22,33,13,99,22,100];

let max = Math.max(...arr);
let min = Math.min(...arr);
let range = max - min + 1

let emptyArray = new Array(range).fill(0);

for (let num of arr) {
    emptyArray[num - min]++;
}

let sortedArray = [];

for (let i = 0; i < emptyArray.length; i++) {
    while (emptyArray[i] > 0) {
        sortedArray.push(i + min);
        emptyArray[i]--;
    }
}

console.log(sortedArray);