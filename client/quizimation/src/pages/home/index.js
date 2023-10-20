// page code for the home page
import React from 'react';
import QuizList from '../../components/QuizList.js';

function Home() {
    return (
        <div className='container'>
            <div id='backgroundColor'>
                <h1 style={{ fontWeight: "bold" }}>Available Quizzes:</h1>
                <section>
                    <QuizList />
                </section>
            </div>
        </div>
    )
}

export default Home;