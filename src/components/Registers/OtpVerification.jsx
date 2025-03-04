import React, { useState } from "react";
import { verifyOtp } from "../../services/authService";

const OtpVerification = ({ email, goToRegister }) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {
    console.log("paylaod", { email, otp: String(otp) });

    const res = await verifyOtp({ email, otp: String(otp) });
    console.log("response", res);

    if (res.data.message == "OTP verified successfully") {
      goToRegister();
    } else {
      alert("Invalid OTP!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Enter OTP</h2>
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-gray-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
