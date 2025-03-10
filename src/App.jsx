import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home";
import Register from "./components/Registers/Register.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"; // Import Navbar
import toast, { Toaster } from "react-hot-toast"; // Import toast

const App = () => {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Toaster  /> {/* Add Toaster for notifications */}
      <Navbar userId={userId} setUserId={setUserId} />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUserId={setUserId} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat userId={userId} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
