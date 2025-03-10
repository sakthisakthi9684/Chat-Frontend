import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import AxiosInstance from "../util/AxiosInstance";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  sessionStorage.setItem("user", "JohnDoe"); // Temporary user for testing
  const userId = sessionStorage.getItem("userId") || "JohnDoe";

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await AxiosInstance.get(`/msg/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const formattedTimestamp = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      month: "short",
      day: "numeric",
    });

    const messageData = { sender: userId, message: input, timestamp: formattedTimestamp };

    try {
      await AxiosInstance.post("/msg/send", messageData);
      setMessages((prev) => [...prev, messageData]);
      setInput("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">Chat Room</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            ref={index === messages.length - 1 ? messagesEndRef : null}
            className={`max-w-xs p-3 rounded-lg ${
              msg.sender === userId ? "bg-blue-500 text-right self-end ml-auto" : "bg-gray-700 text-left self-start"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.message}
            <p className="text-xs text-gray-300 text-right">{msg.timestamp}</p>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex items-center p-4 bg-gray-800">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
