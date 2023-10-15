import React, { useState } from "react";

export default function QuizForm(id) {
    const [mainText, setMainText] = useState('');
    const [options, setOptions] = useState('');
    const [answer, setAnswer] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        try {
            // code to handle the form submission
        } catch (error) {
            console.log(error)
        }
    };

    


    return(
        <form id = {id} onSubmit={(e) => {
            e.preventDefault();
            console.log('Form Submitted!')
        }}>
            <section className="mainText"> <input type="text"/> </section>
            <section className="options">
                <section className="op1"> <input type="text"/> </section>
                <section className="op2"> <input type="text"/> </section>
                <section className="op3"> <input type="text"/> </section>
                <section className="op4"> <input type="text"/> </section>
            </section>
            <section className="answer"> <input type="text"/> </section>
        </form>
    )
}