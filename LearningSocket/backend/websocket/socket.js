let currentroom = null;

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join-room", (roomId)=>{
      if(currentroom){
        socket.leave(currentroom)
      }
      socket.join(roomId)
      currentroom=roomId
      console.log(`Socket ${socket.id} joined room ${roomId}`);
    })

    socket.on("send-message",({roomId,message})=>{
      socket.to(roomId).emit('receive-message',{
        message,
        sender: socket.id
      })
    })

    socket.on("disconnect", () => {
      console.log(`left: ${socket.id}`);
    });
  });
};

module.exports = socketHandler;