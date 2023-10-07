const login = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Logged In',
        status: 200,
    });
};

module.exports = { login };
