const router = require('express').Router();

const login = require('./login');

router.use('/api', login);

module.exports = router;
