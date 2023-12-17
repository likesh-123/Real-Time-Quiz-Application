const Question = require('../models/quetion-model');

const createQuestion = async (req, res) => {
    try {

        const newQuestion = await new Question(req.body).save();

        console.log({ newQuestion });

        res.status(201).json({ message: 'Question created successfully', data: newQuestion });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = createQuestion;