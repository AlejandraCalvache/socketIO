const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo con Socket.IO</h1>');
});

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');
  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

server.listen(4000, () => {
  console.log('Servidor escuchando en http://localhost:4000');
});
