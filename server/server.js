require('./config/config');

const express = require('express');
const socket = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app); // config del servidor


const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

module.exports.io = socket(server);
require('./sockets/socket');

server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);

});