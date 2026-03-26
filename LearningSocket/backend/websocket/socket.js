let currentroom = null
let rooms  ={}

const socketHandler = (io) => {

io.on("connection", (socket) => {
  console.log("User connected",socket.id);

  socket.on("join-room", (roomId) => {
    if(currentroom){
      socket.leave(currentroom)
    }
    socket.join(roomId);
    currentroom=roomId
    if (!rooms[roomId]) rooms[roomId] = "";

    // send existing text
    socket.emit("load-text", rooms[roomId]);

  });
  socket.on("send-text",({roomId,text})=>{
    rooms[roomId]=text;
    socket.to(roomId).emit("receive-text",text)
  })

});

};

module.exports = socketHandler;