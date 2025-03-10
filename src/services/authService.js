import AxiosInstance from "../util/AxiosInstance";

// export const registerUser = (userData) => axios.post(`${API_URL}/register`, userData);
export const loginUser = (userData) =>
  AxiosInstance.post(`/user/login`, userData);

export const sendOtp = async (data) => {
  return await AxiosInstance.post(`/user/send-otp`, data);
};

export const verifyOtp = async (data) => {
  return await AxiosInstance.post(`/user/verify-otp`, data);
};

export const registerUser = async (data) => {
  return await AxiosInstance.post(`/user/register`, data);
};
