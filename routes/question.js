const router = require('express').Router();
const _controller = require('../controllers/question');

router.post('/postQuestion', _controller.postQuestion);
router.get('/getQuestions', _controller.getQuestions);
router.get('/getQuestionData', _controller.getQuestionData);

module.exports = router;
