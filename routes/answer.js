const router = require('express').Router();
const _controller = require('../controllers/answer');

router.post('/postAnswer', _controller.postAnswer);
router.get('/getAnswers', _controller.getAnswers);
router.post('/react', _controller.react);

module.exports = router;
