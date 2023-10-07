const { hash, compare } = require('bcrypt');
const User = require('../models/User');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // find the user from username
        let userData = await User.findOne({ name: username });

        if (userData) {
            // authenticate the user
            const isMatch = await compare(password, userData.password);
            if (!isMatch)
                res.json({
                    status: 401,
                    message: 'Invalid password or username',
                });
        } else {
            // hash the password and create a new user
            const hashVal = await hash(password, 10);
            userData = await User.create({ name: username, password: hashVal });
        }

        return res.json({
            message: 'Logged In',
            status: 200,
            user: userData,
        });
    } catch (error) {
        console.log(`Couldn't login the user: ${error.message}`);
    }
};

module.exports = { login };
