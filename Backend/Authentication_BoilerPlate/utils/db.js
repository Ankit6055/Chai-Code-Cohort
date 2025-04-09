import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch(() => {
      console.log("Error connecting with mongodb");
    });
};

export default db;