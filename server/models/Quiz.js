const { Schema, model } = require("mongoose");

const quizSchema = new Schema({
    mainText: {
        type: String,
        required: true,
        unique: true,
        
    },
    optionOne: {
        type: String,
        required: true,
    },
    optionTwo: {
        type: String,
        required: true,
    },
    optionThree: {
        type: String,
        required: true,
    },
    optionFour: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    }
},
{
    toJSON: {
        virtuals: true,
    },
}
);

const Quiz = model("Quiz", quizSchema);

module.exports = Quiz;