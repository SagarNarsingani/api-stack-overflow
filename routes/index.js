const router = require('express').Router();

const login = require('./login');
const question = require('./question');
const answer = require('./answer');

router.use('/api', login);
router.use('/api', question);
router.use('/api', answer);

module.exports = router;
