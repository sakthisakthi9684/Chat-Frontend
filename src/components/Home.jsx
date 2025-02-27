import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4 animate-pulse">
        Welcome to Chat App
      </h1>
      <p className="text-lg mb-6">
        Start chatting with your friends instantly!
      </p>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
