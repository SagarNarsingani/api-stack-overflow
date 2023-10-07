const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

const connectDB = async () => {
    await mongoose.connect(MONGODB_URI);

    console.log(`Connected to the Database!`);
};

module.exports = { connectDB };
