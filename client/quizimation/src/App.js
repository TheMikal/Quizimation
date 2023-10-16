import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Login from './pages/loginSignup';
import Directory from './components/Directory';

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
            </Routes>
          </div>
          <div>
            <Directory></Directory>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
