const router = require('./router');
const express = require('express');
const server = express();
server.use(express.json());

server.use('/api', router);

module.exports = server;