String.prototype.myToLowerCase = function(callback) {
    let lowerAlphaObj = {
        'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i',
        'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r',
        'S': 's', 'T': 't', 'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z'
    };

    let resultStr = '';
    for (let i = 0; i < this.length; i++) {
        let char = this[i];
        resultStr += lowerAlphaObj[char] || char;
    }

    return resultStr;
}

let s = "Hello";
console.log(s.myToLowerCase());


// Input: s = "Hello"
// Output: "hello"