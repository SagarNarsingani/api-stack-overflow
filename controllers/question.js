const Question = require('../models/Question');
const User = require('../models/User');

const postQuestion = async (req, res) => {
    try {
        const { title, body, tags, userId, id } = req.body;

        if (!id) {
            const question = await Question.create({
                title,
                body,
                tags,
                userId,
            });
            await User.updateOne(
                { _id: userId },
                {
                    $push: {
                        questions: {
                            id: question._id,
                            title,
                            body,
                            tags,
                        },
                    },
                }
            );
        } else {
            await Question.updateOne(
                { _id: id },
                {
                    title,
                    body,
                    tags,
                    userId,
                }
            );

            const res = await User.updateOne(
                { _id: userId, 'questions.id': id },
                {
                    $set: {
                        'questions.$.title': title,
                        'questions.$.body': body,
                        'questions.$.tags': tags,
                    },
                }
            );
        }
        res.json({
            message: 'Question Updated Successfully!',
            status: 200,
        });
    } catch (error) {
        console.log(`Couldn't post the question: ${error.message}`);
    }
};

const getQuestions = async (req, res) => {
    try {
        const { userId } = req.query;
        const myQuestions = await User.findOne(
            { _id: userId },
            { questions: 1 }
        );

        const otherQuestions = await Question.find({ userId: { $ne: userId } });

        return res.json({
            status: 200,
            message: 'Retrieved the questions',
            data: {
                myQuestions: myQuestions?.questions,
                otherQuestions: otherQuestions?.question,
            },
        });
    } catch (error) {
        console.log(`Couldn't get the questions: ${error.message}`);
    }
};

const getQuestionData = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);
        const question = await Question.findById(id);

        return res.json({
            status: 200,
            message: 'Successfully retrieved message data',
            question,
        });
    } catch (error) {
        console.log(`Couldn't get the data of this question: ${error.message}`);
    }
};

module.exports = { postQuestion, getQuestions, getQuestionData };
