const { Server } = require("socket.io");
const http = require("http");
const express = require("express")

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['https://chatmate-dusky.vercel.app'],
        methods: ["GET", "POST"],
    },
});

const getReceiverSocketId = (receiverId) => {
    return userSocket[receiverId]
}

const userSocket = {};

io.on('connection', (socket) => {
    console.log("user connected", socket.id);

    const userId = socket.handshake.query.userId;

    if (userId != "undefined") {
        userSocket[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocket));

    socket.on("disconnect", () => {
        // console.log("user disconnected", socket.id);
        delete userSocket[userId]
        io.emit("getOnlineUsers", Object.keys(userSocket));

    })
})



module.exports = { app, io, server  , getReceiverSocketId}

