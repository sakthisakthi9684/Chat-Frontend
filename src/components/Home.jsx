import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Chat App</h1>
      <p className="text-lg mb-6">Start chatting with your friends instantly!</p>
      <div className="space-x-4">
        <Link to="/chat">
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg">
            Go to Chat
          </button>
        </Link>
        <Link to="/login">
          <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
