import React, { useEffect, useState } from 'react';
import './conversation.scss';
import { useSelector } from 'react-redux';

const Conversation = ({
    userId,
    name,
    profilePicture,
    messageTime,
    lastMessage,
    // isOnline,
    lastSeen,
    notifications,
}) => {

    const { socketIsOnline } = useSelector(state => state.socketContextReducer);
    const [isOnline, setIsOnline] = useState([]);

    useEffect(() => {

        // console.log(profilePicture);
        setIsOnline(socketIsOnline);

    }, [profilePicture, socketIsOnline]);

    return (
        <div className='conversation'>
            <div className='profilePicture'>
                <div>
                    {/* {isOnline && <div className='isOnline'></div>} */}
                    {isOnline?.includes(userId) && <div className='isOnline'></div>}

                    {profilePicture && profilePicture.isProfilePictureUpdate ? (
                        <img src={profilePicture.url} alt="profile" />
                    ) : (
                        <div
                            className="profilePictureString"
                            style={{ background: profilePicture.profilePictureBackgroundColor || "red" }}
                        >
                            {profilePicture.profilePictureString}
                        </div>
                    )}

                </div>
            </div>
            <div className="usernameAndLastMessage">
                <p>{name}</p>
                <p>{lastMessage}</p>
            </div>
            <div className="timeAndNotification">
                <div className='timeAndDate'>
                    {messageTime}
                </div>
                {notifications > 0 && (
                    <div className="notifications">
                        {notifications}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Conversation;
