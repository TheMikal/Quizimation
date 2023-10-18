// page code for the home page
import React from 'react';
import QuizList from '../../components/QuizList.js';

function Home() {
    return (
        <div className='container'>
            <div id='backgroundColor'>
                <h2>Available Quizzes:</h2>
                <section>
                    <QuizList />
                    {/* map the titleTile component over available quizzes */}
                </section>
            </div>
        </div>
    )
}

export default Home;