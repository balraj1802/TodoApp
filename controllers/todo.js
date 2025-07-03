import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(403).json({ success: false, message: "All fields are required." });
    }
    const newTodo = await Todo.create({ title, description });
    return res.status(201).json({ success: true, message: "Todo created", newTodo });
};

export const getTodos = async (req, res) => {
    const todos = await Todo.find();
    return res.status(200).json({ success: true, todos });
};

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Todo not found." });
    return res.status(200).json({ success: true, updated });
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const deleted = await Todo.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "Todo not found." });
    return res.status(200).json({ success: true, message: "Todo deleted." });
};
