import React, { useState } from "react";
import { verifyOtp } from "../../services/authService";
import { FaSpinner } from "react-icons/fa"; // Import Spinner Icon
import toast from "react-hot-toast"; // Import toast

const OtpVerification = ({ email, goToRegister }) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    setIsLoading(true); // Start loading
    console.log("Payload:", { email, otp: String(otp) });

    try {
      const res = await verifyOtp({ email, otp: String(otp) });
      console.log("Response:", res);

      if (res.data.message === "OTP verified successfully") {
        toast.success("OTP verified successfully!");
        goToRegister();
      } else {
        toast.error("Invalid OTP! Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Error verifying OTP. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white px-4 overflow-hidden">
      <h2 className="text-3xl font-bold mb-4 text-center">Enter OTP</h2>
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
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
            "Verify OTP"
          )}
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
