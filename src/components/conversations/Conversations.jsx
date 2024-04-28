import React from 'react';
import './conversations.scss';

import Conversation from '../conversation/Conversation';

const Conversations = ({ chatType }) => {
    return (
        <div className='conversations'>

            <div className='chatCategory'>
                <p>{chatType}</p>
            </div>

            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />

        </div>
    );
};

export default Conversations;