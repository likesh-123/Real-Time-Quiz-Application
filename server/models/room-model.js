const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomId: { type: String, required: true },
    users: [String]
}, { versionKey: false, timestamps: true });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;