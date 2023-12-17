const Room = require('../models/room-model');

const getRoom = async (req, res) => {
    try {

        const {
            roomId
        } = req.query;

        const filters = {};

        if (roomId)
            filters._id = roomId;

        const rooms = await Room.find(filters);

        console.log({ rooms });

        res.status(200).json({ data: rooms });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = getRoom;