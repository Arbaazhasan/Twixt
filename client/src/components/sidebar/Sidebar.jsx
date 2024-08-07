import React, { useEffect } from 'react';
import './sidebar.scss';


import { GoHomeFill } from "react-icons/go";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { sideBarOptions } from '../../redux/reducer/appFunctions';
import { userLogout } from '../../redux/action/userLogin';
import { getAllUsers, getUserConversationsChats } from '../../redux/action/conversations';



const Sidebar = () => {

    const dispatch = useDispatch();
    const { sideBarArray } = useSelector(state => state.appFunctions);
    const { userData } = useSelector(state => state.userLogin);
    const { socketIsOnline } = useSelector(state => state.socketContextReducer);


    const sideBarHandler = (index) => {

        dispatch(sideBarOptions(index));

    };

    const logoutHandler = () => {
        userLogout(dispatch);
    };

    useEffect(() => {
        // console.log(userData);
        // console.log("socketIsOnline", socketIsOnline);

    }, [sideBarArray, socketIsOnline]);

    return (

        <div className="leftSidebar">
            <div className='profilePicture'>
                <div>


                    {
                        // userData?.isOnline && userData?.isOnline ? <div className='isOnline'></div> : ""
                        socketIsOnline && socketIsOnline ? <div className='isOnline'></div> : ""
                    }

                    {userData?.profilePicture?.isProfilePictureUpdate ? (
                        <img src={userData.profilePicture.url} alt="profile" />
                    ) : (
                        <div
                            className="profilePictureString"
                            style={{ background: userData?.profilePicture?.profilePictureBackgroundColor || "red" }}
                        >
                            {userData?.profilePicture?.profilePictureString}
                        </div>
                    )}


                    {/* <img src="picon.png" alt="profile" /> */}
                </div>
            </div>

            <div className='options'>
                <div onClick={() => { sideBarHandler(0); getUserConversationsChats(dispatch); }}>
                    <div className='isNotification'></div>
                    <span style={{ color: sideBarArray[0] ? "white" : "gray" }}><  FiSend /></span>
                </div>

                {/* <div onClick={() => sideBarHandler(1)}>
                    <div className='isNotification'></div>
                    <span style={{ color: sideBarArray[1] ? "white" : "gray" }}><  IoNotificationsSharp /></span>
                </div> */}

                <div onClick={() => { sideBarHandler(2); getAllUsers(dispatch); }}>
                    <div className='isNotification'></div>
                    <span style={{ color: sideBarArray[2] ? "white" : "gray" }}><  MdGroups /></span>
                </div>
                {/* 
                <div onClick={() => sideBarHandler(3)}>
                    <div className='isNotification'></div>
                    <span style={{ color: sideBarArray[3] ? "white" : "gray" }}><  IoMdArchive /></span>
                </div> */}

                <div onClick={() => sideBarHandler(4)}>
                    <span style={{ color: sideBarArray[4] ? "white" : "gray" }}><  IoMdSettings /></span>
                </div>

            </div>


            <div className='logoutBtn'>
                <div>
                    <button onClick={logoutHandler}>
                        <  RiLogoutBoxLine />
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Sidebar;