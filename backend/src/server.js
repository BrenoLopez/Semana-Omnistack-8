const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

//server faz com que o express continue recebendo chamadas http
//atraves da lib nativa do nodejs http 

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;
  connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://omnistack8:omnistack8@cluster0-a95mf.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);