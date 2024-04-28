import React from 'react';
import './notification.scss';

const Notification = () => {
    return (
        <div className='notification'>

            <div className='profilePicture'>
                <div>
                    <img src="picon.png" alt="profile" />
                </div>
            </div>


            <div className="usernameAndLastMessage">
                <p>Bella Huffman</p>
            </div>

            <div className="timeAndNotification">
                <div className='timeAndDate'>
                    10:27 Am
                </div>

                <div className="request">
                    <p>Accept</p>
                </div>
            </div>

        </div>
    );
};

export default Notification;