//  Rotate an array [1, 2, 3, 4, 5] by 2 positions to the right. // [3, 4, 5, 1, 2]

// 2 1 3 4 5
// 2 1 5 4 3 
// 3 4 5 1 2 

function reverseArray(arr, first, last) {
    let low = first;
    let high = last;
    while (low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }
}

function rotatedArray(arr, k) {
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, arr.length - 1);
    reverseArray(arr, 0, arr.length - 1);

    return arr;
}


const arr = [1, 2, 3, 4, 5];
let position = 2;

let result = rotatedArray(arr, position);
console.log(result);