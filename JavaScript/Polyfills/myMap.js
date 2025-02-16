Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        let value = callback(this[i], i, this);
        console.log(value);
        // result.push(value);
    }
    return result;
}

function factory(elem, index, arr) {
    return elem * 2;
}

console.log(factory(10));

// const nums = [1,2, 3, 4, 5];
// const doubledNum = nums.myMap(num => num * 2);
// console.log(doubledNum);