class MyPromise {
    constructor(executorFn) {
        this._state = 'pending';
        this._sucessCallbacks = [];
        this._errorCallbacks = [];
        executorFn(this.resolverFunction, this.rejectorFunction);
    }

    then(cb) {
        this._sucessCallbacks.push(cb);
    }

    catch(cb) {
        this._errorCallbacks.push(cb);
    }

    resolverFunction() {
        this._state = 'fulfilled'
    }

    rejectorFunction() {}
}

function wait(seconds) {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => resolve(), seconds * 1000);
    })
}

// function wait(seconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), seconds * 1000);
//     })
// }

wait(10)
.then(() => console.log(`Promise Resolved After 10 Seconds`))
.catch(() => console.log(`Rejected after 10 Seconds`))
.finally(() => console.log(`Mei toh harr barr chalunga`));