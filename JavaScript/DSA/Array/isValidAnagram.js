// var isAnagram = function(s, t) {
//     let sCount = new Map();
//     let tCount = new Map();

//     for (let letter of s) {
//         sCount.set(letter, (sCount.get(letter) || 0) + 1);
//     }

//     for (let letter of t) {
//         tCount.set(letter, (tCount.get(letter) || 0) + 1);
//     }

//     return areMapsEqual(sCount, tCount);
// };

// function areMapsEqual(map1, map2) {
//     if (map1.size !== map2.size) return false;

//     for (let [key, value] of map1) {
//         if (map2.get(key) !== value) return false;
//     }

//     return true;
// }

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let arr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        arr[s.toLowerCase().charCodeAt(i) - 97]++;
        arr[t.toLowerCase().charCodeAt(i) - 97]--;
    }

    for (let elem of arr) {
        if (elem !== 0) return false;
    }

    return true;
};