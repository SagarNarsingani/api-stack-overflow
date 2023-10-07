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

        return res.json({
            status: 200,
            message: 'Retrieved the answers',
            answers: myAnswers?.answers,
        });
    } catch (error) {
        console.log(`Couldn't get the answers: ${error.message}`);
    }
};

const react = async (req, res) => {
    try {
        const { ansId, userId, queId } = req.body;
        const upvoted = await User.findOne({ upvotes: ansId });

        if (upvoted)
            return res.json({ message: 'already reacted', status: 405 });

        await User.updateOne({ _id: userId }, { $push: { upvotes: ansId } });

        await Answer.updateOne({ _id: ansId }, { $inc: { upvotes: 1 } });
        await Question.updateOne(
            { _id: queId, 'answers.id': ansId },
            {
                $inc: { 'answers.$.upvotes': 1 },
            }
        );

        return res.json({
            message: 'reacted successfully',
            status: 200,
        });
    } catch (error) {
        console.log(`Could not upvote: ${error.message}`);
    }
};

module.exports = { postAnswer, getAnswers, react };
