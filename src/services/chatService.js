import axios from "axios";



// Function to send a message
export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(`${API_URL}/send`, messageData);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
