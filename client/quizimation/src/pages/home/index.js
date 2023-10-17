// page code for the home page
import React from 'react';
import TitleTile from '../../components/TitleTile.js';

function Home() {
    return(
        <div className='container'>
            <div id='backgroundColor'>
                <h2>Available Quizzes:</h2>
                <section>
                    <TitleTile 
                        quizTitle= {"Test"}
                        genre={"Horror"}
                        topScore={"100"}
                    />
                    {/* map the titleTile component over available quizzes */}
                </section>
            </div>
        </div>
    )
}

export default Home;