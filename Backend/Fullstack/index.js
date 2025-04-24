// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Cohort!");
});

app.get("/hitesh", (req, res) => {
  res.send("Hey!");
});

app.get("/piyush", (req, res) => {
  res.send("Hola!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
