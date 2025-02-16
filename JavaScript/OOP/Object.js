function multiplyBy5(num) {
    return num*5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype); // {}

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
    return this.score;
}
createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("Ankit", 25);
const tea = new createUser("Rahul", 250);

chai.printMe();
console.log(tea.increment());