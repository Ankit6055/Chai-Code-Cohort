// const fs = require('fs');
// const math = require('./math');

// fs.writeFile('./test.txt', 'hello world', () => {});

// // console.log(__filename); // C:\Users\Ankit\OneDrive\Desktop\Chai-Code-Cohort\Backend\Node-01\index.js
// // console.log(__dirname); // C:\Users\Ankit\OneDrive\Desktop\Chai-Code-Cohort\Backend\Node-01

// console.log(math);

// function __require(id) {
//     //... agar id . se shuru hua toh user ki dir mein code ko dhundho
//     //... khud se internal module mein dhundunga (node built in system mein dhundega)
//         // .. Agr toh mil gaya toh well and good
//         // .. mahi toh node_modules mein dhundho
// }

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about-us', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact-us', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// can you create a basic express
// POST and GET request 

// req.method 

// const c = require('cohortJs');

// c.getCallPr('/', function() {

// })

// c.suno(8000).aurPhir(() => console.log());





console.log("hello");















