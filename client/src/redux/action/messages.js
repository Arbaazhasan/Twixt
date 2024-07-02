import axios from "axios";
import { getUserMessagesFail, getUserMessagesRequest, getUserMessagesSuccess, sendMessageFail, sendMessageRequest, sendMessageSuccess, } from "../reducer/messages";
import { server } from "../store";


export const getUserMessages = async (dispatch, userId, name, profilePicture, isOnline, updatedAt) => {
    try {

        dispatch(getUserMessagesRequest());


        const { data } = await axios.get(`${server}/message/${userId}`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        // console.log(data.conversation);

        dispatch(getUserMessagesSuccess({
            messages: data.conversation,
            reciverData: { userId, name, profilePicture, isOnline, updatedAt }
        }));

    } catch (error) {

        dispatch(getUserMessagesFail(error.response.data.messages));

    }
};


export const sentMessage = async (dispatch, reciverId, message) => {
    try {

        dispatch(sendMessageRequest());

        const { data } = await axios.post(`${server}/message/send/${reciverId}`, {
            message
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true

        });

        // console.log(data);
        dispatch(sendMessageSuccess());


    } catch (error) {

        dispatch(sendMessageFail(error.response.data.message));

    }
};