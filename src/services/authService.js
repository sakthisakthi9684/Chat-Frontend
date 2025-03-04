import axios from "axios";

const API_URL = "http://localhost:5000";
// http://localhost:5000/user/send-otp

// export const registerUser = (userData) => axios.post(`${API_URL}/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/login`, userData);

export const sendOtp = async (data) => {
  return await axios.post(`${API_URL}/user/send-otp`, data);
};

export const verifyOtp = async (data) => {
  return await axios.post(`${API_URL}/user/verify-otp`, data);
};

export const registerUser = async (data) => {
  return await axios.post(`${API_URL}/user/register`, data);
};
