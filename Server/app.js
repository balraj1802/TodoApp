import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js";
import connectDB from "./db/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "https://localhost:5173",
  credentials: true,
}));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

// Wait for DB connection before starting server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
});
