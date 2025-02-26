if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(cb) {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i);
        }
    }
}

let arr =  [1, 2, 3, 4, 5];

arr.myForEach((value, index) => console.log(`At Index: ${index} Value: ${value}`));