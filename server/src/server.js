import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./utils/db.utils.js";
dotenv.config();

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("welcome to shophouse ecommerce app");
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`.bgCyan.white);
});
