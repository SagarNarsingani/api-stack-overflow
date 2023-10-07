const router = require('express').Router();
const _controller = require('../controllers/answer');

router.post('/postAnswer', _controller.postAnswer);
router.get('/getAnswers', _controller.getAnswers);

module.exports = router;
