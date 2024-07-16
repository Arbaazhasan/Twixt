import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';

import './home.scss';
import SearchBar from '../../components/searchBar/SearchBar';
import Conversations from '../../components/conversations/Conversations';
import Messages from '../../components/messages/Messages';
import Notifications from '../../components/notifications/Notifications';
import Settings from '../../components/settings/Settings';
import Profile from '../../components/Profile/Profile';
import UpdatePassword from '../../components/UpdatePassword/UpdatePassword';
import Connections from '../../components/Connections/Connections';
import AboutUs from '../../components/aboutUs/AboutUs';
import NoChat from '../../components/NoChat/NoChat';


import { useDispatch, useSelector } from 'react-redux';
import { getUserConversationsChats } from '../../redux/action/conversations';

const Home = () => {

    const dispatch = useDispatch();
    const { sideBarArray, settingArray, conversationArray, noConversation } = useSelector(state => state.appFunctions);


    useEffect(() => {

        // console.log(sideBarArray);


        getUserConversationsChats(dispatch);

    }, []);

    return (
        <div className='homePage'>


            <div className='left'>

                <Sidebar />

            </div>


            <div className='conversations'>

                <SearchBar />

                {
                    sideBarArray[0] &&
                    <div className="chats">
                        <Conversations chatType="Chats" />
                    </div>
                }


                {/* {
                    sideBarArray[1] &&

                    <div className="notifications">
                        <Notifications />

                    </div>
                } */}

                {
                    sideBarArray[2] &&
                    <div className="chats" >
                        <Conversations chatType="All Users" />
                    </div>
                }



                {
                    sideBarArray[4] &&
                    <div className="notifications">
                        <Settings />
                    </div>
                }

            </div>

            <div className='messages'>

                {
                    noConversation &&
                    <NoChat />
                }

                {
                    conversationArray &&
                    <Messages />
                }


                {
                    settingArray[0] &&
                    <Profile />
                }

                {
                    settingArray[1] &&
                    <UpdatePassword />


                }


                {
                    settingArray[2] &&
                    <Connections userType="Profile" />
                }

                {
                    settingArray[3] &&
                    <Connections userType="Unblock" />
                }

                {
                    settingArray[4] &&
                    <AboutUs />

                }



            </div>

        </div>
    );
};

export default Home;