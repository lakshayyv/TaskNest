import axios from "axios";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const createUser = async (name, email, password) => {
  try {
    const userPayload = { name: name, email: email, password: password };
    await axios.post("/api/v1/user/signup", userPayload);
    window.location.reload();
  } catch (err) {
    toast.error(err.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
};

export const signUser = async (email, password) => {
  try {
    const userPayload = { email: email, password: password };
    await axios.post("/api/v1/user/signin", userPayload);
    window.location.reload();
  } catch (err) {
    toast.error(err.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
};
