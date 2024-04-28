import React, { useState } from 'react';
import './profileHeader.scss';

import { SlOptionsVertical } from "react-icons/sl";

const ProfileHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const listHandler = () => {
        setIsOpen((pre) => !pre);
    };

    return (
        <div className='profileHeader'>

            <div className='profilePicture'>
                <div>
                    <div className='isOnline'></div>
                    <img src="picon.png" alt="profile" />
                </div>
            </div>

            <div className="usernameAndOnlineStatus">
                <p>Steve Willaiams</p>
                <p>
                    Offline <strong>.</strong> Last seen 3 hours ago
                </p>
            </div>

            <div className="list">

                <label htmlFor="" onClick={listHandler}><SlOptionsVertical /></label>

                <div className="listItems" style={{ display: isOpen ? "block" : "none" }}>

                    <p>User Profile</p>
                    <p>Delete Chat</p>
                    <p>Pin on Top</p>
                </div>

            </div>


        </div >
    );
};

export default ProfileHeader;