import React from 'react';
import './settings.scss';
import { useDispatch, useSelector } from 'react-redux';
import { settingOptions } from '../../redux/reducer/appFunctions';

const Settings = () => {

    const dispatch = useDispatch();
    const { settingArray } = useSelector(state => state.appFunctions);

    const settingOptionHandler = (index) => {
        dispatch(settingOptions(index));

    };

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
                <div onClick={() => settingOptionHandler(0)}>
                    <p>Profile</p>
                </div>

                <div onClick={() => settingOptionHandler(1)}>
                    <p>Update Password</p>
                </div>

                <div onClick={() => settingOptionHandler(2)}>
                    <p>Connections</p>
                </div>


                <div onClick={() => settingOptionHandler(3)}>
                    <p>Block Users</p>
                </div>

                {/* 
                <div>
                    <p>Help</p>
                </div> */}

                <div onClick={() => settingOptionHandler(4)}>
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