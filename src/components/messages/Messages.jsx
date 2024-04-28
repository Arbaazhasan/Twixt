import React from 'react';
import './messages.scss';
import ProfileHeader from '../profileHeader/ProfileHeader';
import Message from '../message/Message';
import InputBar from '../inputBar/InputBar';

const Messages = () => {
    return (
        // <div className='noChats'>

        //     <div>
        //         <p>Twixt</p>
        //         <span>Let start an amazing conversation....</span>
        //     </div>

        // </div>

        <div className='allMessages'>
            <ProfileHeader />

            <Message />

            <InputBar />

        </div>
    );
};

export default Messages;