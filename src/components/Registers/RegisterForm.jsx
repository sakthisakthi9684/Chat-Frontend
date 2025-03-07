import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const RegisterForm = ({ email }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Ensure you send 'username' instead of 'name'
    const res = await registerUser({
      email,
      username: name, // Change 'name' to 'username'
      phone,
      address,
      password,
    });

    console.log(res);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Complete Registration</h2>
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-gray-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-gray-500"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-gray-500"
        />

        {/* Password Input */}
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded border border-gray-500 pr-10"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password Input */}
        <div className="relative w-full mb-4">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 rounded border border-gray-500 pr-10"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
