import React from "react";
import TitleTile from "./TitleTile";
import '../App.css'

function QuizList() {
    let Quizzes = [
        {
            id: 1,
            quizTitle: "DragonBall Z",
            genre: "Adventure",
            topScore: 6
        },
        {
            id: 2,
            quizTitle: "Sailor Moon",
            genre: "Adventure",
            topScore: 10
        },
        {
            id: 3,
            quizTitle: "Hamtaro",
            genre: "Comedy",
            topScore: 5
        },
        {
            id: 4,
            quizTitle: "Zatch Bell",
            genre: "Adventure",
            topScore: 5
        },
    ];

    return (
        <div className="container">
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