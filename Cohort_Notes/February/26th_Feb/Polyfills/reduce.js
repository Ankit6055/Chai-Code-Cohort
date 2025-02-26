let arr =  [1, 2, 3, 4, 5];

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(cb, initialValue = undefined) {
        // if (!initialValue) {
        //     let acc = this[0];

        //     for (let i = 1; i < this.length; i++) {
        //         acc = cb(acc, this[i]);
        //     }
        //     return acc;
        // }
        // let acc = initialValue;
        // for (let i = 0; i < this.length; i++) {
        //     acc = cb(acc, this[i]);
        // }
        // return acc;

        let acc = initialValue || this[0];
        const startIndex = initialValue ? 0 : 1;

        for (let i = startIndex; i < this.length; i++) {
            acc = cb(acc, this[i]);
        }
        return acc;
    }
}

// const res = arr.reduce((abTakKiValue, currentValue) =>  abTakKiValue + currentValue);
const res = arr.myReduce((abTakKiValue, currentValue) =>  abTakKiValue + currentValue, 12);
console.log(res);