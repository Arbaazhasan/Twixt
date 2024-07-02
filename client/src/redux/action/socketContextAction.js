import { io } from "socket.io-client";
import { getSocketContextReducer, getSocketIsOnline } from "../reducer/socketContextReducer";


export const socketContextAction = (dispatch, userAuthenticated, userData) => {

    // dispatch(getSocketContextReducer(ScoketContext));

    try {


        let socket;

        if (userAuthenticated) {


            socket = io('http://localhost:5000', {
                query: {
                    userId: userData._id
                }
            });

            socket.on("getOnlineUsers", (users) => {
                console.log(users);
                dispatch(getSocketIsOnline(users));

            });

            socket.on("connect", () => {
                console.log("Connected to socket Server");
            });


            socket.on("disconnect", () => {
                console.log("Disconnected from socket server");
            });

            return () => {
                socket.close();

            };

        } else {
            if (socket) {
                socket.close();
            }
        }


    } catch (error) {
        console.log(error);

    }

};


export const socketIsOnline = (dispatch, isOnline) => {
    dispatch(getSocketIsOnline(isOnline));
};