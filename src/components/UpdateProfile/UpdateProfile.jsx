import React from 'react';
import './updateProfile.scss';

const UpdateProfile = () => {
    return (
        <form action="" className='updateProfile'>
            <div className="closeWindow">
                <span>X</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span>
                                Name
                            </span>
                        </td>
                        <td><input type="text" /></td>
                    </tr>

                    <tr>
                        <td>
                            <span>
                                Bio
                            </span>
                        </td>
                        <td><input type="text" /></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button>Update</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default UpdateProfile;