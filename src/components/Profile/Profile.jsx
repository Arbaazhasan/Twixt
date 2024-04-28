import React from 'react';
import "./profile.scss";

import { FaRegEdit } from "react-icons/fa";
import UpdateProfile from '../UpdateProfile/UpdateProfile';

const Profile = () => {
    return (

        <div className="profile">

            {/* <UpdateProfile /> */}

            <div className='profilePicture'>
                <div>
                    <img src="picon.png" alt="profile" />
                    <div className='editProfile'>
                        <input type="file" id='editProfile' style={{ display: "none" }} />
                        <label htmlFor="editProfile"><FaRegEdit /></label>

                    </div>
                </div>
            </div>

            <div className="usernameAndName">
                <p>Loard Arbaz</p>
                <span>arbaz@gmail.com</span>
            </div>

            <div className='userBio'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio at nulla voluptas, dolorum cumque qui.</p>
            </div>

            <div className="updateBtn">
                <button>Update</button>
            </div>




        </div >
    );
};

export default Profile;