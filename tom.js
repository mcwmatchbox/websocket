var server= new require('socket.io')();
server.listen(8080);


server.on('connection', function(socket){
  socket.emit('message', { user: 'one' });
  //console.log(socket.conn);

});
