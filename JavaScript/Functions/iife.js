// Immediately Invoked Function Expressions(IIFE)

(function chai() {
    // names IIFE
    console.log(`DB CONNECTED`);
})(); // ";" is imp coz it tells that this function is terminated and then other IIFE can be executed.

((name) => {
    console.log(`BD CONNECTED TO ${name}`);
})("Ankit")