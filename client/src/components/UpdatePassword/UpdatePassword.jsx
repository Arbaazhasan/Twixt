import React from 'react';
import './updatePassword.scss';


const UpdatePassword = () => {
    return (
        <form action="" className='updatePassword'>
            <table>
                <tbody>


                    <tr>
                        <td>Current Password</td>
                        <td><input type="text" /></td>
                    </tr>

                    <tr>
                        <td>New Password</td>
                        <td><input type="text" /></td>
                    </tr>


                    <tr>
                        <td>Confirm Password</td>
                        <td><input type="text" /></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button >Update</button>
                        </td>
                    </tr>



                </tbody>
            </table>
        </form>
    );
};

export default UpdatePassword;