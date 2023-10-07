const Answer = require('../models/Answer');
const Question = require('../models/Question');
const User = require('../models/User');

const postAnswer = async (req, res) => {
    try {
        const { queId, body, title, tags, ansBody, userId } = req.body;

        const answer = await Answer.create({
            queId,
            userId,
            body: ansBody,
            upvotes: 0,
            downvotes: 0,
        });

        await Question.updateOne(
            { _id: queId },
            {
                $push: {
                    answers: {
                        id: answer._id,
                        upvotes: 0,
                        downvotes: 0,
                        body: ansBody,
                        userId,
                    },
                },
            }
        );

        await User.updateOne(
            { _id: userId },
            {
                $push: {
                    answers: {
                        id: queId,
                        body,
                        title,
                        tags,
                    },
                },
            }
        );

        return res.json({
            message: 'answer posted successfully!',
            status: 200,
            answer,
        });
    } catch (error) {
        console.log(`Couldn't post the answer: ${error.message}`);
    }
};

const getAnswers = async (req, res) => {
    try {
        const { userId } = req.query;
        const myAnswers = await User.findOne({ _id: userId }, { answers: 1 });
        console.log(myAnswers);
        return res.json({
            status: 200,
            message: 'Retrieved the answers',
            answers: myAnswers?.answers,
        });
    } catch (error) {
        console.log(`Couldn't get the answers: ${error.message}`);
    }
};

module.exports = { postAnswer, getAnswers };
