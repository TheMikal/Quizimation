require('dotenv').config(); // dotenv setup to configure environment variables
const express = require('express');
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    // context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// for parsing body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    
    db.once('open', () => {
        app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
        })
    })
    };

startApolloServer();