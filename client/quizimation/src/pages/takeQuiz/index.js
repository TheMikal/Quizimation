import React from "react";
import QuizBody from "../../components/QuizBody"

function TakeQuiz() {
    return (
        <section>
            <QuizBody
                mainText={"How many dragon balls are there?"}
                op1={'Two'}
                op2={'ten thousand'}
                op3={'seven'}
                op4={'sixty nine'}
            />
            <QuizBody
                mainText={ "What on earth is Goku's home address?"}
                op1={'planet vegeta'}
                op2={'San Andreas'}
                op3={'439 East District'}
                op4={'He is homeless and that is why he is always training'}
            />
            <QuizBody
                mainText={"Who grows senzu beans on dragon ball z?"}
                op1={'Adam Sandler from Happy Gilmore'}
                op2={'Master Roshi'}
                op3={'Nicholas Cage'}
                op4={'Corran'}
            />
            <QuizBody
                mainText={'what is the name of the planet that Goku is from?'}
                op1={'Mars'}
                op2={'earth'}
                op3={'Moon'}
                op4={'planet vegeta'}
            />
            <QuizBody
                mainText={'Who is Gohans Child?'}
                op1={'Krillin'}
                op2={'Cell Jr.'}
                op3={'pan'}
                op4={'Ubuu'}
           />

            <QuizBody
                mainText={'Who is a prince of an extraterrestrial warrior race known as the Saiyans?'}
                op1={'Broly'}
                op2={'Vegeta'}
                op3={'Trunks'}
                op4={'Oolong'}
        
            />
        </section>
    )
}

export default TakeQuiz;