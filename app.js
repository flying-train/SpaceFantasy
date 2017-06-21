//set up running server
//expresJS makes sever stuff easy, look it up
var express = require('express');
//app is the express instance
var app = express();
//this is http server
var server = require('http').Server(app);
//sockets.io instance for the server
var io = require('socket.io')(server);

//port to listen to - 8000 is the default value, procces.env.PORT is any other available port
var port = process.env.PORT || 8000;

//listen to port
app.listen(port, function() {
	console.log(port); //server console(terminal)
})
//GET request '/', sends index
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})
app.use(express.static('client'));
//after client connects
io.on('connection', function(socket/*the client*/) {
	console.log(socket); //logs all available info about the socket connected
	socket.on('message', function() {
		//do stuff
	})
})