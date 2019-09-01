const express = require('express');
const AuthRouter = require('./Auth/auth-router');
const server = express();



server.use(express.json());

server.use('/api/auth', AuthRouter);

module.exports = server;