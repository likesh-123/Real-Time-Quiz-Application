const express = require('express');
let userRouter = express.Router();

const createRoom = require('../controllers/create-room-controller');
const getRoom = require('../controllers/get-room-controller');

userRouter.post('/create-room', createRoom);
userRouter.get('/get-room', getRoom);

module.exports = userRouter;