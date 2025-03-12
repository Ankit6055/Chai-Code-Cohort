// const obj = [{ 
//     "sentence": "This island is far beyond the images you see online",
//     "topic": "the image",
//     "sentiment": "POSITIVE",
//     "score": 0.9040651917457581 
// },
// { 
//     "sentence": "From arriving in Malle you are ushered into the private Luxe lounge to await your seaplane.",
//     "topic": "seaplane",
//     "sentiment": "POSITIVE",
//     "score": 0.9949505925178528 
// }, 
// { 
//     "sentence": "relaxing facilities are at you disposal, cannot comment further as fortunately our seaplane was ready for us to board shortly after arriving.",
//     "topic": "seaplane,disposal", 
//     "sentiment": "NEGATIVE",
//     "score": 0.9940604567527771 
// } 
// ];

// const paraValue = document.getElementById('para');

// let paraContent = paraValue.innerHTML;


// obj.forEach((obj) => {
//     let sentence = obj.sentence.trim();

//     if (paraContent.includes(sentence)) {
//         console.log(sentence);
//         paraContent = paraContent.replace(new RegExp(sentence.split(/\s+/)[0], 'i'), `<span style="background-color: green">${sentence}</span>`);        
//     }
//     paraValue.innerHTML = paraContent;
// })

// console.log(typeof 100); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof { name: "Alice" }); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function () {}); // "function"
// console.log(typeof Symbol()); // "symbol"
// console.log(typeof null); // "object"
// console.log(typeof NaN); // "number"
// console.log(typeof 12n); // "bigint"
// console.log(typeof class User {}); // "function"


// const person = {
//     name: "Bob",
//     greet: function (greeting) {
//         console.log(`${greeting}, I am ${this.name}`);
//     },
// };

// const anotherPerson = { name: "Charlie" };

// person.greet.call(anotherPerson, grt = "Hell");
// person.greet.apply(anotherPerson, [ "Hello","Hi", "Hello"]);
// const boundFn = person.greet.bind(anotherPerson, "Hey");
// boundFn();

// for (var i = 0; i < 3; i++) {
//     (function(i) {
//         setTimeout(function() { console.log(i); }, 1000);
//     })(i);
// }

// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI("AIzaSyBB2FL7otovl_phgaZB1XwU4SMSR2n14UM");

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());


// let timerId = 3000;
// setTimeout(function() {
//     clearInterval(timerId);
//     console.log('Interval stopped after 5 seconds');
//   }, 4000);

