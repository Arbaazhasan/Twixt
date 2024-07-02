import React, { useEffect, useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { getUser, userLogin, userSignin } from '../../redux/action/userLogin';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();
    const { userAuthenticated } = useSelector(state => state.userLogin);

    const [isSignIn, setIsSignIn] = useState(false);
    const [isMatched, setIsMached] = useState(true);


    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPasswrod] = useState('');
    const [confirmPasswrod, setConfrimPassword] = useState('');



    const signUpTogler = () => {
        setIsSignIn((pre) => !pre);
    };


    const passwordHandler = () => {
        setIsMached(password === confirmPasswrod);
    };

    const submitHandler = (e) => {

        e.preventDefault();



        isSignIn ? userSignin(dispatch, name, username, password) : userLogin(dispatch, username, password);

    };


    useEffect(() => {

        getUser(dispatch);

    }, [password, confirmPasswrod, userAuthenticated]);


    return (
        <div className='login'>

            <div>
                <h1>
                    {isSignIn ? "SignUp" : "Login"}
                </h1>
            </div>

            <form action="" onSubmit={submitHandler}>

                {

                    isSignIn ?
                        <div className="">
                            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                        </div>

                        :

                        ""

                }

                <div className="">
                    <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                </div>


                <div className="">
                    <input type="password" placeholder='password' onChange={(e) => setPasswrod(e.target.value)} />
                </div>

                {
                    isSignIn ?

                        <div className="">
                            <input type="password" placeholder='confirm-password' onChange={(e) => setConfrimPassword(e.target.value)} />
                            <p>{isMatched ? "" : "password not matched"}</p>
                        </div>

                        :

                        ""
                }


                <div onClick={passwordHandler}>
                    {
                        isMatched

                            ?
                            <button type='submit'> {isSignIn ? "SIgnup" : "Login"}</button>
                            :
                            <button type='submit'> {isSignIn ? "SIgnup" : "Login"}</button>
                    }
                </div>

            </form>

            <section>
                <button onClick={signUpTogler}>
                    {
                        isSignIn ? "Already have an account" : "Don't have an account"
                    }
                </button>
            </section>
        </div>
    );
};

export default Login;