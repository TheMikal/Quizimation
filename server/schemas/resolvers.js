const { User, Quiz, HiScore } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { authMiddleware } = require("../utils/auth")
const { ObjectId } = require("mongodb");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const resolvers = {
    Query: {
        // some code
        user: async () => {
            return User.find()
        },
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

        createQuiz: async (parent, {mainText, options, answer}, context) => {
            // Verify that the user is authenticated using context.user
            if (!context.user) {
                throw new AuthenticationError("Authentication error");
            }
            try {
                const newQuiz = await Quiz.create({
                    mainText: mainText,
                    options: options,
                    answer: answer,
                    creator: context.user._id,
                });

                return newQuiz;
            } catch (err) {
                // Handle any errors that occur during quiz creation
                throw new Error("Error creating the quiz");
            }
        },

        deleteQuiz: {
            // some stuff
        },

        addUser: async (parent, {username, firstName, lastName, email, password }) => {
            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await User.create({
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hashedPassword,
                });

                return newUser;
            } catch (err) {
                // Handle any errors that occur during user creation
                throw new Error("Error creating the user");
            }
        },

        // deleteUser: async (parent, args, context) => {
        //     if (!context.user) {
        //         throw new AuthenticationError('You must be logged in to delete a user');
        //     }

        //     try {
        //         // Check if the user with the provided ID exists
        //         const user = await User.findByIdAndDelete(context.user.id);

        //         if (!user) {
        //         throw new Error('User not found');
        //         }

        //         return 'User deleted successfully';
        //     } catch (error) {

        //         throw new Error(`Error deleting user: ${error.message}`);
        //     }
        // },

        uploadScore: {
            // some stuff
        },
    },
};

module.exports = resolvers;