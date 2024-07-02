import axios from "axios";
import { getAllUserChatsFail, getAllUserChatsSuccess, getAllUsersChatsRequest } from "../reducer/conversation";
import { server } from "../store";



export const getUserAllChats = async (dispatch) => {
    try {

        dispatch(getAllUsersChatsRequest());


        const { data } = await axios.post(`${server}/getusers/getusers`, {}, {

            headers: {
                "Content-Type": "application/json"
            },

            withCredentials: true
        });

        // console.log(data.sidebarUser);

        dispatch(getAllUserChatsSuccess(data.sidebarUser));


    } catch (error) {

        console.log(error.response.data.message);
        dispatch(getAllUserChatsFail(error.response.data.message));

    }

};