import { useState, useEffect } from "react";
import { sendMessage } from "../services/chatService";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sender, setSender] = useState("User1"); // Static sender for now

  useEffect(() => {
    socket.on("message", (messageData) => {
      setMessages((prev) => [...prev, messageData]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const messageData = { sender, message: input };
    
    try {
      await sendMessage(messageData);
      socket.emit("sendMessage", messageData);
      setInput("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Chat Room</h2>
      <div style={{ border: "1px solid black", height: "200px", overflowY: "auto", padding: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "80%", padding: "5px" }}
      />
      <button onClick={handleSend} style={{ marginLeft: "10px" }}>Send</button>
    </div>
  );
};

export default Chat;
