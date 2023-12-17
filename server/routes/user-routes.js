const express = require('express');
let userRouter = express.Router();

const createRoom = require('../controllers/create-room-controller');
const getRoom = require('../controllers/get-room-controller');
const createQuestion = require('../controllers/create-question-controller');

userRouter.post('/create-room', createRoom);
userRouter.get('/get-room', getRoom);
userRouter.post('/create-question', createQuestion);

module.exports = userRouter;