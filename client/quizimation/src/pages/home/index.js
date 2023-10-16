// page code for the home page
import React from 'react';
import Directory from '../../components/Directory';
const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi', 'Fantasy']

function Home() {
    return(
        <div>
            <Directory genres={genres} />
        </div>
    )
}

export default Home;