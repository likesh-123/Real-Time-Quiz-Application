const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected successfully');

    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        // Exit with failure if unable to connect with the mongodb database
        process.exit(1);
    }
};

module.exports = connectDB;