// let nums = [-2, 1, 2, 5, 4, -2];
let maxValue = -Infinity;

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//         let sum = 0;
//         for (let k = i; k <= j; k++) {
//             sum += nums[k];
//             maxValue = Math.max(maxValue, sum);
//             process.stdout.write(`${nums[k]}, `);
//         }
//         console.log();
//     }
// } 
 
// for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {      
//         sum += nums[j];
//         maxValue = Math.max(maxValue, sum);
//         // process.stdout.write(`${nums[j]}, `);
//     }
    
//     // console.log();
// } 

let nums = [-2,1,-3,4,-1,2,1,-5,4];

let sum = 0;
let maxSum = -Infinity;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) {
        sum = 0;
    }
}

console.log(maxSum);