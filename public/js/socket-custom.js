
var socket = io();

socket.on('connect', function() {

console.log('conectado al servidor');

});


socket.on('disconnect', function() {

console.log('se ha perdido la conexion');

});

socket.emit('enviarMensaje', 
{usuario : 'Jovanny Granados', 
mensaje : 'hola',
}, function(res){

console.log('respuesta server :', res);

});


socket.on('enviarMensaje', function(mensaje){

console.log('servidor:',mensaje);

});