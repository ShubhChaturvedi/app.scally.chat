import {
    Server
} from "socket.io"

class SocketServer{
    private _io : Server
    constructor(){
        console.log("socket service started...")
        this._io = new Server();
    }

    public initListeners(){
        console.log("we are in init listerners");
        const io = this._io;
        io.on("connect", (socket)=>{
            console.log("a new socket in connected");
            socket.on("event:message", async ({message} : {message: String})=>{

                console.log("an event => message <= emit with message", message);

            })

        })
    }

    get io(){
        return this._io
    }
}

export default SocketServer;

