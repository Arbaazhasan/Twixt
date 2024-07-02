import React, { useEffect, useState } from 'react';
import './profileHeader.scss';
import { SlOptionsVertical } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { formatTime } from '../../utils/formatTime';

const ProfileHeader = () => {
    const { reciverData } = useSelector(state => state.messagesReducer);

    const [isOpen, setIsOpen] = useState(false);

    const listHandler = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        // Any side effects related to reciverData can be handled here
    }, [reciverData]);

    return (
        <div className='profileHeader'>
            <div className='profilePicture'>
                <div>
                    {reciverData?.isOnline && <div className='isOnline'></div>}
                    
                    {reciverData?.profilePicture?.isProfilePictureUpdate ? (
                        <img src={reciverData.profilePicture.url} alt="profile" />
                    ) : (
                        <div
                            className="profilePictureString"
                            style={{ background: reciverData?.profilePicture?.profilePictureBackgroundColor || "red" }}
                        >
                            {reciverData?.profilePicture?.profilePictureString}
                        </div>
                    )}
                </div>
            </div>

            <div className="usernameAndOnlineStatus">
                <p>{reciverData?.name}</p>
                {reciverData?.isOnline ? (
                    <p>Online</p>
                ) : (
                    <p>
                        Offline <strong>.</strong> {`Last seen ${formatTime(reciverData?.updatedAt)}`}
                    </p>
                )}
            </div>

            <div className="list">
                <label htmlFor="" onClick={listHandler}><SlOptionsVertical /></label>
                <div className="listItems" style={{ display: isOpen ? "block" : "none" }}>
                    <p>User Profile</p>
                    <p>Delete Chat</p>
                    <p>Pin on Top</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
