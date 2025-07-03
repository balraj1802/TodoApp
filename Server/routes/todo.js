import express from "express";
import { createTodo, getTodos, deleteTodo, updateTodo } from "../controllers/todo.js";
import { isAuthenticated } from "../middleware/authentication.js";

const router = express.Router();

router.route("/")
  .post(isAuthenticated, createTodo)
  .get(isAuthenticated, getTodos);

router.route("/:id")
  .delete(isAuthenticated, deleteTodo)
  .put(isAuthenticated, updateTodo);

export default router;
