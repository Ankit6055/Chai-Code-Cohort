// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = parseInt((low + high)/2);

//         if (arr[mid] === target) {
//             return mid;
//         }
//         else if (arr[mid] < target) {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }
//     return -1;
// }

function binarySearch(low, high, arr, target) {
    if (low > high) {
        return -1; 
    }

    let mid = Math.floor((low + high)/2);

    if (arr[mid] === target) {
        return mid;
    }
    else if (arr[mid] < target) {
        return binarySearch(mid + 1, high, arr, target);
    }
    else {
        return binarySearch(low, mid - 1, arr, target);
    }
}


let arr = [1, 2, 3, 4, 5];
let target = 4;

const result = binarySearch(0, arr.length - 1, arr, target);
console.log(result);
