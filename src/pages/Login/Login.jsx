import React, { useEffect, useState } from 'react';
import './login.scss';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(false);
    const [isMatched, setIsMached] = useState(true);
    const [password, setPasswrod] = useState('');
    const [confirmPasswrod, setConfrimPassword] = useState('');

    const signUpTogler = () => {
        setIsSignIn((pre) => !pre);
    };


    const passwordHandler = () => {
        setIsMached(password === confirmPasswrod);
    };


    useEffect(() => {
        console.log(confirmPasswrod, password);

    }, [password, confirmPasswrod]);





    return (
        <div className='login'>

            <div>
                <h1>
                    {isSignIn ? "SignUp" : "Login"}
                </h1>
            </div>

            <form action="">

                <div className="">
                    <input type="text" placeholder='username' />
                    <p>already exits</p>
                </div>

                <div className="">
                    <input type="text" placeholder='password' onChange={(e) => setPasswrod(e.target.value)} />
                </div>

                {
                    isSignIn ?

                        <div className="">
                            <input type="text" placeholder='confirm-password' onChange={(e) => setConfrimPassword(e.target.value)} />
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
                            <button type='button'> {isSignIn ? "SIgnup" : "Login"}</button>
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