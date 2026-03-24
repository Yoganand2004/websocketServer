import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// connect to backend
const socket = io("http://localhost:8003");

function App() {
  const [message, setMessage] = useState([]);
  const [received, setReceived] = useState([]);
  const [roomId, setroomId] = useState("");

  useEffect(() => { 
    socket.on("receive-message", (data) => {
      setReceived((prev)=>[...prev , data.message]);
      
    });
    
    return () => {
      socket.off("receive-message");
    };
  }, []);

  const joinRoom =()=>{
    socket.emit("join-room",roomId)
  };


  const sendMessage = () => {
    socket.emit("send-message", {
      roomId:roomId,
      message:message
    });
  };

  
  return (
    <div style={{ padding: "20px" }}>
      <h2>Socket.IO React Example</h2>
      <input
      type="number"
      placeholder="roomNo"
      value={roomId}
      onChange={(e)=>setroomId(e.target.value)}
      
      />
      <button onClick={joinRoom}>Join</button>
    <br/>
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

      <h3>Messages:</h3>
      {received.map((msg, i) => (
        <p key={i}>
          {msg}
        </p>
      ))}
    </div>
  );
}

export default App;