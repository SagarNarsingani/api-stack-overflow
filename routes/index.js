const router = require('express').Router();

const login = require('./login');
const question = require('./question');

router.use('/api', login);
router.use('/api', question);

module.exports = router;
