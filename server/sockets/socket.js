const {io} = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');
    
    client.emit('enviarMensaje', {nombre : 'servidor', msj : 'hola novato'});
    
    
    client.on('disconnect', () => {
    
        console.log('usuario desconectado');
        
        });
    
    // listen client
    client.on('enviarMensaje', (data, callback) => {
    
    console.log(data);

    client.broadcast.emit('enviarMensaje', data);
    
    });
    
    
    });
    