// code for the page of taking the quiz
import React from "react";
import QuizBody from "../../components/QuizBody"

function TakeQuiz() {
    return (
        <section>
            <QuizBody 
            mainText={"whats naruto's last name"}
            op1={'robert'}
            op2={'john'}
            op3={'kyle'}
            op4={'steve'}
            />
        </section>
    )
}

export default TakeQuiz;