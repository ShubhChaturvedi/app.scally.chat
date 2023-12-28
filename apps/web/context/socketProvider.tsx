"use client";

import React, { useCallback, useContext, useEffect } from "react";
import { io } from "socket.io-client";

interface SocketProviderProps{
    children? : React.ReactNode;
}

interface ISocketContext{
    sendMessage : (msg: String) => any;
}

export const useSocket = () => {
    const state = useContext(SocketContext);
    if(!state) throw new Error(`state is undefined`);

    return state;
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const SocketProvider : React.FC<SocketProviderProps> = ({children})=>{
    const sendMessage : ISocketContext["sendMessage"] = useCallback((msg)=>{
        console.log("message passed status 200", msg);
    }, [])
    useEffect(()=>{
        const _socket = io("http://localhost:8000");
        return ()=>{
            _socket.disconnect();
        }
    },[]) 
    return (
        <SocketContext.Provider value={{sendMessage}}>
            {children}
        </SocketContext.Provider>
    )
}