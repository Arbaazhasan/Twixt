import React, { useEffect } from 'react';
import './messages.scss';
import ProfileHeader from '../profileHeader/ProfileHeader';
import Message from '../message/Message';
import InputBar from '../inputBar/InputBar';
import NoChat from '../NoChat/NoChat';
import { useSelector } from 'react-redux';

const Messages = () => {

    const { conversationArray } = useSelector(state => state.appFunctions);


    return (
        <>
            {
                conversationArray ?


                    <div className='allMessages'>
                        <ProfileHeader />

                        <Message />

                        <InputBar />

                    </div>

                    :

                    <NoChat />

            }


        </>

    );
};

export default Messages;