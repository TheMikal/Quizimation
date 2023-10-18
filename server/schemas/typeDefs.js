const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        firstName: String
        lastName: String
        email: String
        password: String
        profilePic: String
        quizzes: [Quiz]
    }

    type Option {
        _id: ID
        text: String
    }

    type Score {
        _id: ID
        user: User
        quiz: Quiz
        score: Int
    }

    type Quiz {
        _id: ID
        title: String
        mainText: String
        options: [Option]
        answer: String
        creator: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        getQuiz: [Quiz]
        getAvailableQuizzes(quizId: ID!): Quiz
        getHiScore: [Score]
        getUser: [User]
    }

    type Mutation {
        # mutations code here
        login(username: String!, password: String!): Auth
        addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): User
        createQuiz(mainText: String!, options: [String]!, answer: String!): Quiz
        deleteQuiz(quizId: ID!): String
        uploadScore(quizId: ID!, score: Int!): Score
    }
`;

module.exports = typeDefs;