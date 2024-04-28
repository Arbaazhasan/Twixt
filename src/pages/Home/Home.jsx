import React, { useState } from 'react';
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

const Home = () => {


    return (
        <div className='homePage'>


            <div className='left'>
                <Sidebar />
            </div>


            <div className='conversations'>

                <SearchBar />

                {/* <div className="chats">
                    <Conversations chatType="Pinned" />
                    <Conversations chatType="Chats" />
                </div> */}
                {/* 
                <div className="chats">
                    <Conversations chatType="groups" />
                </div> */}

                {/* <div className="chats">
                    <Conversations chatType="Archive" />
                </div> */}

                {/* 

                <div className="notifications">
                    <Notifications />

                </div> */}


                <div className="notifications">
                    <Settings />

                </div>

            </div>

            <div className='messages'>
                {/* <Messages /> */}

                {/* <Profile /> */}

                {/* <UpdatePassword /> */}


                {/* <Connections /> */}


            </div>

        </div>
    );
};

export default Home;