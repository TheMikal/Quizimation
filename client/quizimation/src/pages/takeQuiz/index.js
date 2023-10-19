import React, { useState } from "react";
import QuizBody from "../../components/QuizBody"
import { useNavigate } from 'react-router-dom';

function TakeQuiz() {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    // Function to update the count
    const updateCount = () => {
        setCount(count + 1);
        console.log(`count is: ${count}`);
        
        if (count >= 6) {
            navigate('/hiscore');
        }
    };

    return (
        <section className="container">
            <div className="question">
                <QuizBody
                    mainText={"How many dragon balls are there?"}
                    op1={'Two'}
                    op2={'Ten thousand'}
                    op3={'Seven'}
                    op4={'Sixty nine'}
                    updateCount={updateCount}
                />
            </div>
            <div className="question">
                <QuizBody
                    mainText={ "What on earth is Goku's home address?"}
                    op1={'Planet Vegeta'}
                    op2={'San Andreas'}
                    op3={'439 East District'}
                    op4={'He is homeless and that is why he is always training'}
                    updateCount={updateCount}
                />
            </div>
            <div className="question">
                <QuizBody
                    mainText={"Who grows senzu beans on dragon ball z?"}
                    op1={'Adam Sandler from Happy Gilmore'}
                    op2={'Master Roshi'}
                    op3={'Nicholas Cage'}
                    op4={'Corran'}
                    updateCount={updateCount}
                />
            </div>
            <div className="question">
                <QuizBody
                    mainText={'What is the name of the planet that Goku is from?'}
                    op1={'Mars'}
                    op2={'Earth'}
                    op3={'Moon'}
                    op4={'Planet Vegeta'}
                    updateCount={updateCount}
                />
            </div>
            <div className="question">
                <QuizBody
                    mainText={'Who is Gohans Child?'}
                    op1={'Krillin'}
                    op2={'Cell Jr.'}
                    op3={'Pan'}
                    op4={'Ubuu'}
                    updateCount={updateCount}
                />
            </div>
            <div className="question">
                <QuizBody
                    mainText={'Who is a prince of an extraterrestrial warrior race known as the Saiyans?'}
                    op1={'Broly'}
                    op2={'Vegeta'}
                    op3={'Trunks'}
                    op4={'Oolong'}
                    updateCount={updateCount}
                />
            </div>
        </section>
    )
}

export default TakeQuiz;