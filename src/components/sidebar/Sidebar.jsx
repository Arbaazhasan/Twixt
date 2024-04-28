import React from 'react';
import './sidebar.scss';

import { GoHomeFill } from "react-icons/go";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";


const Sidebar = () => {
    return (

        <div className="leftSidebar">
            <div className='profilePicture'>
                <div>
                    <div className='isOnline'></div>
                    <img src="picon.png" alt="profile" />
                </div>
            </div>

            <div className='options'>
                <div>
                    <div className='isNotification'></div>
                    <span><  FiSend /></span>
                </div>

                <div>
                    <div className='isNotification'></div>
                    <span><  IoNotificationsSharp /></span>
                </div>

                <div>
                    <div className='isNotification'></div>
                    <span><  MdGroups /></span>
                </div>

                <div>
                    <div className='isNotification'></div>
                    <span><  IoMdArchive /></span>
                </div>

                <div>
                    <span><  IoMdSettings /></span>
                </div>




            </div>


            <div className='logoutBtn'>
                <div>
                    <button><  RiLogoutBoxLine /></button>
                </div>

            </div>

        </div>
    );
};

export default Sidebar;