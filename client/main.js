//self calling anonymous function, to prevent console hacking(scope)
(function() {
var socket = io.connect('http://localhost:' + 8000)
//everything like socket listeners inside
socket.on('connect', function() {
	//nothing here
})
})();