const { Schema, model, SchemaTypes } = require('mongoose');

const answerSchema = new Schema({
    body: String,
    upvotes: Number,
    downvotes: Number,
    userId: { type: SchemaTypes.ObjectId, ref: 'User', required: true },
});

const Answer = model('Answer', answerSchema);

module.exports = Answer;
