const express = require('express');
const cors = require('cors');

const router = require('./routes');
const { connectDB } = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(5001, () => {
    connectDB();
    console.log(`Listening @port:5001`);
});
