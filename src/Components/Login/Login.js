import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import './Login.css';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';


function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })

    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }


    return (
        <div style={{ textAlign: 'center' }}>

            <div className="signIn-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                    <br />
                    <br />
                    <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                    <br />
                    <br />
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                    <br />
                    <br />
                    <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                </form>
                <br />
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" value={newUser ? 'Sign up' : 'Sign in'} />
                {
                    newUser ? <label htmlFor="newUser">Sign Up</label> : <label htmlFor="newUser">Sign In</label>
                }
            </div>

            { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
                <button className="login-google-fb" onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} />Continue With Google</button>
            }
            <br />
            <br />
            <button className="login-google-fb" onClick={fbSignIn}><FontAwesomeIcon icon={faFacebook} />Continue With Facebook</button>

            <p style={{ color: 'red' }}>{user.error}</p>
            { user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
    );
}

export default Login;