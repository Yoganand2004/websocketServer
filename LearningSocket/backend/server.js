const express = require('express')
const app = express()
const {createServer} = require("node:http");
const {Server} = require('socket.io')
const cors = require("cors")

app.use(cors())
const server = createServer(app);
const socketHandler  = require("./websocket/socket")
const io = new Server(server,{
    cors: {
        origin:"*",
        credentials:true,
    },
});

app.get("/", (req, res) => {
  res.send("Server running");
});
socketHandler(io);


const PORT = 8003;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
