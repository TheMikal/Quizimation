import React from "react";
import TitleTile from "./TitleTile";

function QuizList() {
    let Quizzes = [
        {
            id: 1,
            quizTitle: "DragonBall Z",
            genre: "Adventure",
            topScore: 100
        },
        {
            id: 2,
            quizTitle: "Sailor Moon",
            genre: "Adventure",
            topScore: 140
        },
        {
            id: 3,
            quizTitle: "Hamtaro",
            genre: "Comedy",
            topScore: 17
        },
        {
            id: 4,
            quizTitle: "Zatch Bell",
            genre: "Adventure",
            topScore: 2
        },
    ];

    return (
        <div>
            {Quizzes.map((quiz) => (
                <TitleTile
                    key={quiz.id}
                    quizTitle={quiz.quizTitle}
                    genre={quiz.genre}
                    topScore={quiz.topScore}
                />
            ))}
        </div>
    )
}

export default QuizList;