const jwt = require('jsonwebtoken');
require('dotenv').config();

const expiration = "6h";

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.query.token || req.body.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        try {
            const { data } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: expiration });
            req.user = data;
        } catch {
        // error processing code
        }
        return req;
    },

    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
    
        return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: expiration });
        
        // return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};