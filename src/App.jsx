import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home";
import Register from "./components/Registers/Register.jsx";
const App = () => {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUserId={setUserId} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat userId={userId} />} />
      </Routes>
    </Router>
  );
};

export default App;
