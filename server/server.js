const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connect", (socket) => {
    socket.on("join", (roomId) => {
        socket.join(roomId);
    });

    socket.on("send", (messageData) => {
        socket.to(messageData.room).emit("receive", messageData);
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected ${socket.id}`);
    });
});

server.listen(3001);
