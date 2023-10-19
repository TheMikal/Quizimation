import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Login from './pages/loginSignup/Login';
import SignUp from './pages/loginSignup/Signup';
import TakeQuiz from './pages/takeQuiz';
import MakeQuiz from './pages/makeQuiz';
import Directory from './components/Directory';
import QuizByGenre from './pages/quizByGenre';
import './App.css';
import HiScore from './pages/hiScore';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
            <div>
              <Routes>
                <Route
                  path= "/"
                  element={<Home />}
                />
                <Route 
                  path= "/login"
                  element= {<Login />} 
                />
                <Route 
                  path= "/signup"
                  element= {<SignUp />}
                />
                <Route 
                path='/hiscore'
                element= {<HiScore />}
                />
                {/* route for quiz by id */}
                <Route 
                  path= "/quiz"
                  element= {<TakeQuiz />}
                />
                {/* route for making a quiz */}
                <Route 
                  path= '/createYourOwn'
                  element= {<MakeQuiz />}
                />
                {/* route for listing available quizzes by genre */}
                <Route 
                  path='/genres/:genre'
                  element= {<QuizByGenre />}
                />
              </Routes>
            </div>
          <div>
            <Directory 
              genres={["Action", "Comedy", "Drama", "Fantasy", "Romance", "Sci-Fi", "Slice of Life",]}
            />
          </div>
          <div className='container'></div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
