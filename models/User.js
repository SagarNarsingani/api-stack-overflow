const { Schema, model, SchemaTypes } = require('mongoose');

const userSchema = new Schema({
    name: String,
    password: String,
    upvotes: [{ type: SchemaTypes.ObjectId, ref: 'Answer' }],
    downvotes: [{ type: SchemaTypes.ObjectId, ref: 'Answer' }],
    questions: [
        {
            id: {
                type: SchemaTypes.ObjectId,
                ref: 'Question',
                required: true,
            },
            title: String,
            body: SchemaTypes.String,
            tags: [String],
        },
    ],
    answers: [
        {
            id: {
                type: SchemaTypes.ObjectId,
                ref: 'Question',
                required: true,
            },
            title: String,
            body: SchemaTypes.String,
            tags: [String],
        },
    ],
});

const User = model('User', userSchema);

module.exports = User;
