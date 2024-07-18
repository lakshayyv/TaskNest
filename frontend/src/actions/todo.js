import axios from "axios";

export const createTodo = async (title, description, setError, setTodos) => {
  setError(null);

  if (title.trim() === "" || description.trim() === "") {
    setError("Both title and description are required.");
    return;
  }

  try {
    const todoPayload = { title: title, description: description };
    const response = await axios.post("api/v1/todo", todoPayload);

    if (response.data.success) {
      setTodos((prev) => [...prev, response.data.message]);
    }
  } catch (error) {
    setError(error.response.data.message);
  }
};

export const fetchAllTodos = async () => {
  const response = await axios.get("/api/v1/todos");
  return response.data.message;
};
