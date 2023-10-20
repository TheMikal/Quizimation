const db = require("../config/connection");
const { HiScore, Quiz, User } = require("../models");

const userSeed = require("./UserSeeds.json");
const quizSeed = require("./QuizSeeds.json");
const scoreSeed = require("./ScoreSeeds.json")

db.once("open", async () => {
    
    await User.deleteMany({});
    await Quiz.deleteMany({});

    const user = await User.create(userSeed);
    console.log(user);
    const quiz = await Quiz.create(quizSeed);
    console.log(quiz);
    const score = await HiScore.create(scoreSeed);
    
    console.log(score);

    // update user with associated quiz by owner and username
    await User.findOneAndUpdate(
        { owner: User.username },
        { $addToSet: { quizzes: quiz._id } }
    );

    console.log("all done!");
    process.exit(0);
});