import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ userId, setUserId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserId(null);
    navigate("/login");
  };

  // Dynamic navbar text based on current page
  let navbarTitle = "CHAT-APP";
  if (location.pathname === "/login") {
    navbarTitle = "WELCOME BACK TO CHAT-APP";
  } else if (location.pathname === "/register") {
    navbarTitle = "WELCOME TO CHAT-APP";
  }

  return (
    <nav className="bg-[#1E293B] text-white p-4 flex justify-between items-center shadow-md fixed w-full top-0 z-10">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-teal-400 text-transparent bg-clip-text mb-0 text-nowrap">
        {navbarTitle}
      </h1>

      <div className="flex space-x-4">
        {userId ? (
          <>
            <Link to="/chat" className="hover:text-blue-400">
              Chat
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
