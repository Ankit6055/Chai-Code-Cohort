const add = function(x, y) {
  return x + y;
}

const sub = function(x, y) {
    // This subtracts a and b
    return x - y;
}

const mul = function(x, y) {
    return x * y;
}

const subtract = sub

// Default
module.exports = {
    add, 
    sub, 
    subtract,
    mul
}