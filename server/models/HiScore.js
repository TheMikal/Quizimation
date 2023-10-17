const { Schema, model } = require("mongoose");

const scoreSchema = new Schema({
    userScore: {
        type: Integer,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    quizID: {
        type: Integer,
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