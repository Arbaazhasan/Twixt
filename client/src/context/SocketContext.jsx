import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { socketContextAction, socketIsOnline } from "../redux/action/socketContextAction.js";

export const SocketContext = createContext();

export const useSocketContenxt = () => {

    const dispatch = useDispatch();
    return socketContextAction(dispatch, SocketContext);

};

export const SocketContextProvider = ({ children }) => {
    const dispatch = useDispatch();

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { userAuthenticated, userData } = useSelector(state => state.userLogin);
    const { ScoketContext } = useSelector(state => state.socketContextReducer);



    useEffect(() => {
        let socket;

        if (userAuthenticated) {
            socket = io('http://localhost:5000', {
                query: {
                    userId: userData._id,
                }
            });


            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                console.log("getOnlineUsers" + users);
                setOnlineUsers(users);
                socketIsOnline(dispatch, users);
            });

            // Handle socket events
            socket.on("connect", () => {
                console.log("Connected to socket server");
            });

            socket.on("disconnect", () => {
                console.log("Disconnected from socket server");
            });

            // Clean up the socket when the component unmounts or userAuthenticated changes
            return () => {
                socket.close();
                setSocket(null);
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }

        socketIsOnline(dispatch, onlineUsers);

    }, [userAuthenticated]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
