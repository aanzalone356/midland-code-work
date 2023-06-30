import { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = 'http://localhost:8080';

const useSocketHook = () => {
    //
    const [response, setResponse] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        //Connect when the componet mounts
        socketRef.current = socketIOClient(ENDPOINT);
       // Listener for "char message"
       socketRef.current.on("new message", data => {
            //Adds the message to the list of responses
            setResponse(prevState => [...prevState, data]);
       });
       //Disconnect when the component unmounts
       return () => {
            socketRef.current.disconnect();
       }
    }, []);

    const sendMessage = (message)=> {
        //Emits the event using the socket
        socketRef.current.emit("new message", message);
    };

    return { response, sendMessage};
}

export default useSocketHook;