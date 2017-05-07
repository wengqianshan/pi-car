'use strict'

let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

let Robot = require('./robot')

let robot = new Robot()


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
  console.log('socket server connected');
  socket.on('do', (msg) => {
    console.log(msg)
    switch (msg) {
      case 'forward':
        robot.forward();
        break;
      case 'backward':
        robot.backward();
        break;
      case 'left':
        robot.left();
        break;
      case 'right':
        robot.right();
        break;
      case 'stop':
        robot.stop();
        break;
      default:

    }
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
