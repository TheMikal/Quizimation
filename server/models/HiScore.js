const { Schema, model } = require("mongoose");

const scoreSchema = new Schema({
    userScore: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    quizID: {
        type: Number,
        required: true,
    }
},
{
    toJSON: {
        virtuals: true,
    },
}
);

const HiScore = model("HiScore", scoreSchema);

module.exports = HiScore;