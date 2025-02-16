// Class - Blueprint
class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName() {
        return `${this.fname} ${this.lname}` // String Interpolation
    }
}
// Everything in JS is Object
const p1 = new Person('Ankit', 'Kumar');
const p2 = new Person('Rahul', 'Garg');

console.log(p1.getFullName());
console.log(p2.getFullName());