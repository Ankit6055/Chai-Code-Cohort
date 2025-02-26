function pataNahi(fn, delay) {
    console.log(arguments);
    let myId;
    return function() {  // First Class Function
        myId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

pataNahi("Ankit", 2);