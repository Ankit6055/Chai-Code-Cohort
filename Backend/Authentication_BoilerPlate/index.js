import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js"

//import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello Everyone!");
});

app.get("/Ankit", (req, res) => {
  res.send("Ankit!");
});

app.get("/Rohan", (req, res) => {
  res.send("Rohan!");
});

// Connect to db
db();

// User Routes
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
