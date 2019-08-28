const express = require('express');
const AuthRouter = require('./Auth/auth-router');
const server = express();
const cors = require('cors');


server.use(express.json());
server.use(cors());
server.use('/api/auth', AuthRouter);

module.exports = server;