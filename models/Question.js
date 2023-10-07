const { Schema, model, SchemaTypes } = require('mongoose');

const questionSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    userId: { type: SchemaTypes.ObjectId, ref: 'User', required: true },
    answers: [
        {
            id: {
                type: SchemaTypes.ObjectId,
                ref: 'Answer',
            },
            body: SchemaTypes.String,
            upvotes: Number,
            downvotes: Number,
            userId: {
                type: SchemaTypes.ObjectId,
                ref: 'User',
                required: true,
            },
        },
    ],
});

const Question = model('Question', questionSchema);

module.exports = Question;
