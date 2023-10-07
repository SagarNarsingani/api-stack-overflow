const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://sagar:UTNGkpQ078a4yp7D@cluster0.xdju4gh.mongodb.net/?retryWrites=true&w=majority'
    );

    console.log(`Connected to the Database!`);
};

module.exports = { connectDB };
