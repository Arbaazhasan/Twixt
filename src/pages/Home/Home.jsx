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
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();
    const { sideBarArray, settingArray } = useSelector(state => state.appFunctions);

    useEffect(() => {

        console.log(sideBarArray);

    }, [sideBarArray, settingArray]);

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
                        <Conversations chatType="Pinned" />
                        <Conversations chatType="Chats" />
                    </div>
                }


                {
                    sideBarArray[1] &&

                    <div className="notifications">
                        <Notifications />

                    </div>
                }

                {
                    sideBarArray[2] &&
                    <div className="chats">
                        <Conversations chatType="Groups" />
                    </div>
                }

                {
                    sideBarArray[3] &&
                    <div className="chats">
                        <Conversations chatType="Archive" />
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

                {/* <Messages /> */}

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
                    <Connections />
                }



            </div>

        </div>
    );
};

export default Home;