const rooms = {};

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.emit("welcome", `welcome to the server ${socket.id}`);

    socket.on("send_message", (data) => {
      console.log("Message:", data);

      // send to all clients
      io.emit("receive_message", data);
    });
    
    io.to('targetSocketId').emit('private_msg', { text: 'Hey' });


    socket.on("disconnect", () => {
      console.log(`left: ${socket.id}`);
    });
  });
};

module.exports = socketHandler;