const app = require('express')();
const cors = require('cors');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.use(cors());

io.on("connection", (socket) => {
    console.log("New Client Connected");

    //when a new chat occurs sends the chat to all connected to the server
    socket.on("new message", (msg) => {
        io.emit("new message", msg);
    });

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });

    // socket.on("new channel", (channel) => {
    //     io.emit("channel name", channel);
    // })

    socket.on("disconnect", () => {
        console.log("Client Disconnected");
    });
});

server.listen(8080, () => console.log("Server Started"));