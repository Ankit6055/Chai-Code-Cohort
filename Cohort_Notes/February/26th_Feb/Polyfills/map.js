if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(cb) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            const value = cb(this[i], i);
            result.push(value);
        }

        return result;
    }
}

let arr =  [1, 2, 3, 4, 5];
const trippledArray = arr.myMap((e) => e * 3);
console.log(trippledArray);