// Filter students who scored more than 80 marks.
let students = [
    { name: "Ankit", marks: 85 },
    { name: "Rahul", marks: 78 },
    { name: "Priya", marks: 90 }
];

let topperStudents = students.filter(prop => prop.marks > 80);
console.log(topperStudents);