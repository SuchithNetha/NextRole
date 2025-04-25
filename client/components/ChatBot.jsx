// ChatBot.jsx
import { useState } from 'react';

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    const res = await fetch("http://localhost:5000/api/chat/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input })
    });
    const data = await res.json();
    setChat([...chat, { user: input }, { bot: data.answer }]);
    setInput("");
  };

  return (
    <div className="chat-container">
      {chat.map((msg, idx) => (
        <p key={idx}><strong>{msg.user ? "You" : "Bot"}:</strong> {msg.user || msg.bot}</p>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
