const PORT = process.env.PORT;

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(PORT);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  socket.on('message', function (data) {
    console.log("On message: " + data);
    io.emit('message', data);
  });
});
