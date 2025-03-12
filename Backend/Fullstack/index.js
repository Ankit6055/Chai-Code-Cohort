require('dotenv').config()
const express = require('express')
// import express from 'express'

const obj = {
    name: "Ankit",
    Age: 21,
    College:"IIT BOMBAY"
}

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('byteswithankit')
})

app.get('/github', (req, res) => {
    res.json(obj)
})

app.get('/login', (req, res) => {
    res.send('<h1> Hola Guys </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Chai Aur Code')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})