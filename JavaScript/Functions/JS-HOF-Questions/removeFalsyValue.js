// Remove falsy values (null, undefined, false, 0, "").
let mixedArr = [0, "hello", "", undefined, "world", null, 42, false];

let Arr = mixedArr.filter(Boolean);
console.log(Arr);