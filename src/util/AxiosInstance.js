import axios from "axios";

const AxiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://chat-backend-yqcz.onrender.com",

  // baseURL: "https://chat-backend-yqcz.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
