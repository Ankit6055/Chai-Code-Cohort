// Implement a function to check if two arrays are equal.

function equalArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 5, 4];
let checkEqual = equalArray(arr1, arr2);
console.log(checkEqual);