import http from 'http';
import SocketServer from './services/socket';

async function init(){
    const httpServer = http.createServer();
    const PORT = process.env.PORT ? process.env.PORT : 8000;

    const socketServer = new SocketServer();

    socketServer.io.attach(httpServer);

    httpServer.listen(PORT , ()=>{
        console.log(`HTTP server listen on port : ${PORT}`)
    })

    socketServer.initListeners();
}

init();