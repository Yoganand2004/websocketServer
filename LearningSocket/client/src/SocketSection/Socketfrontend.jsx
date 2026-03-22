import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// connect to backend
const socket = io("http://localhost:8003");

function App() {
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState("");

  useEffect(() => { 
    socket.on("receive_message", (data) => {
      
      
      setReceived(data);
    });
    socket.on("welcome", (s)=>{
      console.log(s);
    }) 
    socket.on("private_msg",{
      targetSocketId:''
      
      
    })
    
    return () => {
      socket.off("receive_message");
      socket.off("welcome");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", message);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Socket.IO React Example</h2>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

      <h3>Received: {received}</h3>
    </div>
  );
}

export default App;