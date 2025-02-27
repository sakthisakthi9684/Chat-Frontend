import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../../services/authService";
import axios from "axios";

const EmailVerification = ({ setEmail, goToOtp }) => {
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/send-otp", {
        email: emailInput,
      });

      console.log("OTP Sent Successfully:", response.data);
    } catch (error) {
      console.error(
        "Error Sending OTP:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Verify Your Email</h2>
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <input
          type="email"
          placeholder="Enter Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-gray-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
