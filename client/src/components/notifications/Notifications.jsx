import React from 'react';
import "./notifications.scss";
import Notification from '../notification/Notification';

const Notifications = () => {
    return (
        <div className='notificaitons'>
            <div className='heading '>
                <p>Notificaitons</p>
            </div>

            <div className='notificationContainer'>
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>


        </div>
    );
};

export default Notifications;