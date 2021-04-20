const { Socket } = require("socket.io");

const io = require("socket.io")(3000, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

//esto es para eventos
io.on('connection', (socket) => {
    console.log('Usuario conectado');
    //asi se emtie un sms
    socket.emit('message', 'Hola mundo');
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    socket.on('chatmsg', msg =>{
        io.emit('message',msg);
    });
});

