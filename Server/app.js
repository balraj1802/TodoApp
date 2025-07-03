import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js";
import connectDB from "./db/database.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser()); // <- Add this line
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
