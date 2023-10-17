const { User, Quiz, HiScore } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const multer = require('multer');
const { authMiddleware } = require("../utils")
const { ObjectId } = require("mongodb");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const resolvers = {
    Query: {
        // some code
        // quiz by id
        getQuiz: async (parent, {_id}) => {
            return await Quiz.findOne({ _id });
        },
        getAvailableQuizzes: async (parent, args, context) => {
            if(context.user) {
                const user = await User.findOne({ _id: context.user._id }).populate(
                    "quizzes"
                );
                return user.quizzes;
            }
        throw new AuthenticationError("Authentication error");
        },

        getHiScore: async (parent, {quizId, userScore}) => {
            const quiz = await Quiz.findById({_id: quizId});

            const quizScoreObject = new ObjectId(userScore);
            const score = quiz.quizzes.find((quiz) => quiz._id.equals(quizScoreObject));
            if (!score) {
                console.log("No Scores to show!");
                return null;
            }

            console.log("Scores found!");

            return score;
        },
    },
    Mutation: {
        // some code here
        login: async (parent, { username, password }) => {
            console.log("hit login");
            const user = await User.findOne({ username });
            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }
            console.log("user found", user);
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }
            const token = signToken(user);
            console.log(token, user);
            return { token, user };
        },

        createQuiz: {
            // some stuff
        },

        uploadQuiz: {
            // some stuff
        },

        deleteQuiz: {
            // some stuff
        },

        addUser: {
            // some stuff
        },

        deleteUser: {
            // some stuff
        },

        uploadScore: {
            // some stuff
        },
    },
};

module.exports = resolvers;