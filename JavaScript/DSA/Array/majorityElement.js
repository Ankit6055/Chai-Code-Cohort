let nums = [2,2,1,1,1,2,2];
let len = nums.length;

let map = new Map();

nums.forEach(num => {
    map.set(num, (map.get(num) || 0) + 1);
})


for (let [key, value] of map) {
    if (value > len / 2) {
        console.log(key);
    }
}