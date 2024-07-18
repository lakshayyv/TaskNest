const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/todo.js");
const { errorMiddleware } = require("./middlewares/error.js");

dotenv.config({ path: "./config/config.env" });
require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/", todoRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server started on port [${port}]`);
});
