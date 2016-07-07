var client = require('socket.io-client');

//console.log(client);

var socket = client.connect('ws://localhost:8080');

//console.log(socket);

socket.on('message', function(info) {
	console.log("receive from Server", info);
});

console.log("socket: ", socket);
console.log("client: ", socket.client);

/*
socket.client.conn.on('data', function(data) {
	console.log(data);
});
*/
