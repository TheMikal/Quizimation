// code for the page to make the quiz

import QuizForm from "../../components/QuizForm";

function MakeQuiz() {
    return(
        <QuizForm onSubmit = {(data) => {
            // code for fetch to store data in db
        }}
        />
    )
}