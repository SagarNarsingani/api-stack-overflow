const router = require('express').Router();
const _controller = require('../controllers/login');

router.post('/login', _controller.login);
module.exports = router;
