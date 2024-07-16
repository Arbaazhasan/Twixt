import toast from "react-hot-toast";
import { getUserFail, getUserRequest, getUserSuccess, userLoginFail, userLoginRequest, userLoginSuccess, userLogoutFail, userLogoutRequest, userLogoutSuccess, userSigninFail, userSigninSuccess, userSignupRequest } from "../reducer/userLogin";
import axios from "axios";
import { server } from "../store";




export const userSignin = async (dispatch, name, username, password) => {
    try {


        dispatch(userSignupRequest());

        const { data } = await axios.post(`${server}/user/register`, {

            name,
            username,
            password,

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(userSigninSuccess());

        toast.success(data.message);

    } catch (error) {

        dispatch(userSigninFail(error.response.data.message));

    }

};

export const userLogin = async (dispatch, username, password) => {

    try {

        dispatch(userLoginRequest());

        const { data } = await axios.post(`${server}/user/login`, {
            username,
            password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        // console.log(data);


        dispatch(userLoginSuccess(data));

        toast.success("Login");

        getUser(dispatch);

    } catch (error) {

        dispatch(userLoginFail(error.response.data.message));
        console.log(error);

    }


};


export const userLogout = async (dispatch) => {
    try {

        dispatch(userLogoutRequest());

        const { data } = await axios.get(`${server}/user/logout`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(userLogoutSuccess());

        toast.success(data.message);

    } catch (error) {
        dispatch(userLogoutFail(error.response.data.message));
    }
};



export const getUser = async (dispatch) => {

    try {

        dispatch(getUserRequest());

        const user = localStorage.getItem('chat-user');

        if (!user) return getUserFail("Invalid token!");


        const { data } = await axios.post(`${server}/user/getuser`, {
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        // console.log(data);

        // console.log(localStorage.getItem('chat-user'));

        dispatch(getUserSuccess(data.message));


    } catch (error) {

        console.log(error);
        dispatch(getUserFail(error.response.data.message));

    }
};

