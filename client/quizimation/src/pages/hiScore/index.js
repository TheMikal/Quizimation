// page code for the hiScore page
import React, { useState } from 'react';
import ScoreBox from '../../components/ScoreBox';

function HiScore({ Scores }) {

    if(!Scores) {
        return (
            <div>No Scores Available!</div>
        )
    }

    // const [hiScores, setHiScores] = useState([]);


    return(
        <div className='container'>
            <section>Quiz Title</section>
            <section>
                {/* {Object.keys(hiScores).map((hiScore) => {
                    return (
                        <div>
                            <ScoreBox 
                                userName
                                userScore
                            />
                        </div>
                    )
                })} */}
            </section>
        </div>);
}

export default HiScore;