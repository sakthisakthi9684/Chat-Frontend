import React, { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa"; // Import Spinner Icon
import toast from "react-hot-toast"; // Import toast

const EmailVerification = ({ setEmail, goToOtp }) => {
  const [emailInput, setEmailInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!emailInput) {
      toast.error("Please enter an email address.");
      return;
    }

    setIsLoading(true); // Start loading
    try {
      const response = await axios.post("http://localhost:5000/user/send-otp", {
        email: emailInput,
      });

      console.log("OTP Sent Successfully:", response.data);
      toast.success("OTP sent successfully!");
      setEmail(emailInput);
      goToOtp();
    } catch (error) {
      console.error(
        "Error Sending OTP:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Verify Your Email</h2>
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <input
          type="email"
          placeholder="Enter Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-gray-500 bg-gray-700 text-white"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg flex items-center justify-center"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <FaSpinner className="animate-spin text-white" size={20} />
          ) : (
            "Send OTP"
          )}
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
