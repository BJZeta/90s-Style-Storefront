import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get('/', (req, res) => {
    res.send('API IS RUNNING ---')
})

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT:${PORT}`));
