const { ErrorHandler } = require("../utils/errorHandler");

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Something went wrong";

  if (err.code === 11000) {
    const message = "Record already exist";
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "CastError") {
    const message = "Record not found";
    err = new ErrorHandler(message, 400);
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

const emptyInputError = (next, message = "Invalid inputs") => {
  return next(new ErrorHandler(message, 400));
}

const recordNotFoundError = (next, message = "Record not found") => {
  return next(new ErrorHandler(message, 400));
};

module.exports = {
  errorMiddleware,
  recordNotFoundError,
  emptyInputError
};
