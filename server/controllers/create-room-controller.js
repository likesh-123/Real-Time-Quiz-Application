const Room = require('../models/room-model')

const createRoom = async (req, res) => {
    try {
        const roomId = Math.random().toString(36).slice(6).toUpperCase();

        const newRoom = await new Room({
            roomId: roomId
        }).save();

        console.log({ newRoom });

        res.status(201).json({ message: 'Room created successfully', data: newRoom });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = createRoom;