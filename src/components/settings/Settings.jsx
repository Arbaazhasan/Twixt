import React from 'react';
import './settings.scss';

const Settings = () => {
    return (
        <div className='settings'>

            <div className='profilePicture'>
                <div>
                    <img src="picon.png" alt="profile" />
                </div>
            </div>

            <div className="nameAndUsername">
                <div>
                    <p>Lord Arbaz</p>
                    <span>arbaz@gmail.com</span>
                </div>
            </div>

            <div className="options">
                <div>
                    <p>Profile</p>
                </div>

                <div>
                    <p>Update Password</p>
                </div>

                <div>
                    <p>Connections</p>
                </div>


                <div>
                    <p>Block Users</p>
                </div>


                <div>
                    <p>Help</p>
                </div>

                <div>
                    <p>About Us</p>
                </div>


            </div>

            <div className='appVersion'>
                <p>Version 2.01</p>
            </div>

        </div>
    );
};

export default Settings;