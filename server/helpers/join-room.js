const Room = require('../models/room-model');

const joinRoom = async (io, socket, roomData) => {
    const { userId, room, roomId } = roomData;
    try {
        const getRoom = await Room.findById(roomId);

        if (getRoom && getRoom.users.length < 2) {
            getRoom.users.push(userId);
            await getRoom.save();
            socket.join(room);
            io.to(room).emit('user-joined-room', `Hello ${roomId}!`);
        } else {
            io.emit('cannot-join-room', 'Room is full or does not exist!');
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = joinRoom;