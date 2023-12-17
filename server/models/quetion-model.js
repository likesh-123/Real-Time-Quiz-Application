const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: { type: String, required: true, unique: true },
    option1: { type: String, required: true },
    option2: { type: String, required: true },
    option3: { type: String, required: true },
    option4: { type: String, required: true },
    answer: { type: String, required: true },
}, { versionKey: false })

Question = mongoose.model('Question', questionSchema);

module.exports = Question;