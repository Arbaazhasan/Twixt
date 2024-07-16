import axios from "axios";
import { server } from "../store";
import { getAllUserFail, getAllUsersRequest, getAllUserSuccess, getUserConversationsFail, getUserConversationsRequest, getUserConversationsSuccess } from "../reducer/conversation";



export const getAllUsers = async (dispatch) => {
    try {

        dispatch(getAllUsersRequest());



        const { data } = await axios.post(`${server}/getusers/getusers`, {}, {

            headers: {
                "Content-Type": "application/json"
            },

            withCredentials: true
        });

        // console.log(data.sidebarUser);

        dispatch(getAllUserSuccess(data.sidebarUser));


    } catch (error) {

        console.log(error);
        dispatch(getAllUserFail(error.response.data.message));

    }

};
export const getUserConversationsChats = async (dispatch) => {
    try {

        dispatch(getUserConversationsRequest());

        const { data } = await axios.get(`${server}/getusers/getuserconversations`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        // console.log(data.conversationsArray);

        dispatch(getUserConversationsSuccess(data.conversationsArray));

    } catch (error) {
        console.error(error);

        // Enhanced error handling
        dispatch(getUserConversationsFail(error.response.data.message));
    }
};
