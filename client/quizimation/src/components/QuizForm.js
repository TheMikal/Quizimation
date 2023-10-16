import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

export default function QuizForm({ addQuestion }) {
    const [mainText, setMainText] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
    };

    const question = {
        mainText,
        options: [option1, option2, option3, option4],
        answer,
    };

    // try {
    //     const response = await fetch('/api/questions', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(question),
    //     });
    // } catch (error) {
    //     console.log('Error: ', error)
    // }

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            setMainText(e.mainText.value);
            setOption1(e.option1.value);
            setOption2(e.option2.value);
            setOption3(e.option3.value);
            setOption4(e.option4.value);
            setAnswer(e.answer.value);
        }}>
            <section className="mainText"> 
                <input 
                    type="text"
                    placeholder="What's your Question?"
                    value={mainText}/> 
            </section>

            <section className="options">
                <section className="op1"> 
                    <input 
                        type="text" 
                        placeholder="Option A"
                        value={option1}/> 
                </section>
                <section className="op2"> 
                    <input 
                        type="text"
                        placeholder="Option B"
                        value={option2}/> 
                </section>
                <section className="op3"> 
                    <input 
                        type="text"
                        placeholder="Option C"
                        value={option3}/> 
                </section>
                <section className="op4"> 
                    <input 
                        type="text"
                        placeholder="Option D"
                        value={option4}/> 
                </section>
            </section>

            <section className="answer"> 
                <input 
                    type="text"
                    placeholder="What is the answer?"
                    value={answer}/> 
            </section>
            <Button colorScheme= "green"><text>Submit Quiz</text></Button>
        </form>
    )
}