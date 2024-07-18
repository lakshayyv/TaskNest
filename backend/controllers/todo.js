const { catchAsyncError } = require("../middlewares/catchAsyncError");
const {
  recordNotFoundError,
  emptyInputError,
} = require("../middlewares/error");
const { Todo } = require("../models/todo");

const todoController = {
  createTodo: catchAsyncError(async (req, res, next) => {
    const todoPayload = req.body;

    if (todoPayload.title === "" || todoPayload.description === "") {
      return emptyInputError(next);
    }

    const todo = await Todo.create(todoPayload);
    return res.status(200).json({
      success: true,
      message: todo,
    });
  }),

  fetchTodo: catchAsyncError(async (req, res, next) => {
    const todoId = req.query.id;
    const todoPayload = await Todo.findById(todoId);

    if (!todoPayload) {
      return recordNotFoundError(next);
    }

    res.status(200).json({
      success: true,
      message: todoPayload,
    });
  }),

  updateTodo: catchAsyncError(async (req, res, next) => {
    const todoId = req.query.id;
    const updatePayload = req.body;

    const todoPayload = await Todo.findByIdAndUpdate(todoId, updatePayload, {
      new: true,
    });

    if (!todoPayload) {
      return recordNotFoundError(next);
    }

    return res.status(200).json({
      success: true,
      message: todoPayload,
    });
  }),

  deleteTodo: catchAsyncError(async (req, res, next) => {
    const todoId = req.query.id;

    const todoPayload = await Todo.findByIdAndDelete(todoId);

    if (!todoPayload) {
      return recordNotFoundError(next);
    }

    return res.status(200).json({
      success: true,
      message: todoPayload,
    });
  }),

  completeTodo: catchAsyncError(async (req, res, next) => {
    const todoId = req.query.id;

    const todoPayload = await Todo.findByIdAndUpdate(
      todoId,
      {
        completed: true,
      },
      { new: true }
    );

    if (!todoPayload) {
      return recordNotFoundError(next);
    }

    return res.status(200).json({
      success: true,
      message: todoPayload,
    });
  }),

  fetchAllTodos: catchAsyncError(async (req, res, next) => {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      message: todos,
    });
  }),
};

module.exports = {
  todoController,
};
