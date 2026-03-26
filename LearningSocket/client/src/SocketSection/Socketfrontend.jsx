import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./Socketfrontend.css"

// connect to backend
const socket = io("http://localhost:8003");

function SocketFrontand() {
  const [text, setText] = useState("");
  const [roomId, setroomId] = useState("");
  const [joined, setJoined] = useState(false);
  useEffect(()=>{
    socket.on("load-text",(data)=>{
      setText(data);
    })
    socket.on("receive-text",(data)=>{
      setText(data);
    })
    return () => {
      socket.off("load-text");
      socket.off("receive-text");
    };

  },[])
  // const handleChange

  const handleChange = (e)=>{
    setText(e.target.value)
    socket.emit("send-text",{
      roomId:roomId,
      text:e.target.value
    })
  }

  const JoinRoom =()=>{
    if (roomId.trim() === "") {
      alert("Please enter a room ID");
      return;
    }
    socket.emit("join-room", roomId);
    setJoined(true);
  }


  return (
    <>
    <h2>Cross Device Text</h2>
    <div>
      <input 
          type="text"
          onChange={(e)=>setroomId(e.target.value)}
          placeholder="Enter Port Number"/>
            <button onClick={JoinRoom}>Join</button>
    </div>
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your message here..."
        rows={10}
        style={{
          width: "600px",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          outline: "none",
          resize: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      />

    </div>
    </div>

    
      

    </>
  );
}

export default SocketFrontand;