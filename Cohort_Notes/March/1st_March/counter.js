/*
I should have fn increment()
on call of the fn it should icrement the number
and return the current count

console.log( increment() ) 1
console.log( increment() ) 2
console.log( increment() ) 3
console.log( increment() ) 4
*/

function increment() {
    let count = 0;

    // Closure Function (function binded by its lexical scope)
    return function() {
        count++;
        return count;
    }
}

const x = increment();
const y = increment();
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());

// console.log(y());
// console.log(y());


function change() {
    let arr = [1, 2, 4];

    return function(a = 69) {
        arr.push(a);
        return arr;
    }
}

const a = change();
const b = change(12);

console.log(a());
console.log(a());
console.log(a());

console.log(b(12));
console.log(b(12));
console.log(b(12));


function createCounter(stepSize = 1, initialValue = 0) {
    return function() {
        initialValue = initialValue + stepSize;
        return initialValue;
    }
}

const li = createCounter();


function createDebouncedVersion(fn, delay) {
    let timerId = null;

    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(fn, delay);
    }
}

function apiCall() {}

const apiCallDebounce = createDebouncedVersion(apiCall, 5 * 1000);
apiCallDebounce();


function createInstance() {
    let store = {
        value: 100
    } // 100 mb
    return function() {
        console.log(store);
    }
}

const logger = createInstance();

logger();
logger();
logger();
// jab ye code chalega, mera 100 mb use hoga

logger = null;
// Iske baad garbage collector remove kardega