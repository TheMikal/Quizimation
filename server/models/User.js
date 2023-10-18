const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // removes whitespace
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    quizzes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quiz",
        }
    ],
},
{
    toJSON: {
        virtuals: true,
    },
}
);

// fetch quizzes made by user

userSchema.virtual('createdQuizzes', {
    ref: 'Quiz',
    localField: '_id',
    foreignField: 'creator',
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;