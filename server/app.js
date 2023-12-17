const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connectDB = require('./config/connect-database');
const routes = require('./routes/user-routes');

const joinRoom = require('./helpers/join-room')

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Connect to MongoDB
connectDB();

// Middleware for JSON parsing
app.use(express.json());

app.use('/api/user', routes);

io.on('connection', (socket) => {
    console.log('A user connected');

    // Join a room
    socket.on('join-room', (roomData) => {
        // socket.join(room);
        // console.log(`User trying to join room: ${roomData.room}`);

        joinRoom(io, socket, roomData);
    });

    // Listen for a custom event
    socket.on('customEvent', (data) => {
        console.log('Custom event received:', data);

        // Emit to all clients in a specific room
        io.to(data.room).emit('customEventResponse', `Hello ${data.username}!`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
