const db = require("../config/connection");
const {  } = require("../models");

const userSeed = require("./UserSeeds.json");
const quizSeed = require("./QuizSeeds.json");

db.once("open", async () => {
    
    await User.deleteMany({});
    await Capsule.deleteMany({});

    const user = await User.create(userSeed);
    console.log(user);
    const cap = await Quiz.create(quizSeed);
    console.log(cap);
    
    user.capsules.push(cap);
    console.log(user);

    // update user with associated quiz by owner and username
    await User.findOneAndUpdate(
        { owner: User.username },
        { $addToSet: { capsules: cap._id } }
    );

    console.log("all done!");
    process.exit(0);
});