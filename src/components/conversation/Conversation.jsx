import React from 'react';
import './conversation.scss';

const Conversation = () => {
    return (
        <div className='conversation'>

            <div className='profilePicture'>
                <div>
                    <div className='isOnline'></div>
                    <img src="picon.png" alt="profile" />
                </div>
            </div>


            <div className="usernameAndLastMessage">
                <p>Bella Huffman</p>
                <p>Wow, that looks amazing.</p>
            </div>

            <div className="timeAndNotification">
                <div className='timeAndDate'>
                    10:27 Am
                </div>

                <div className="notifications">
                    1
                </div>
            </div>

        </div>
    );
};

export default Conversation;