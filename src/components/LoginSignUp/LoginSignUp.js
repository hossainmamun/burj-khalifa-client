import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userContext } from '../../App.js';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const LoginSignUp = () => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({
        isSignIn: false,
        userName: '',
        email: '',
        photoUrl: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    // google sign in
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = {
                    isSignIn: true,
                    username: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signInUser);
                setLoggedInUser(signInUser);
                storeAuthToken();
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            })
            .catch(function (error) {
                console.log(error.message)
            });
    }
    return (
        <div className='text-center mt-5'>
            <h3 className='text-capitalize mb-4'>welcome to login page</h3>
            <button className='btn btn-warning px-4' onClick={handleGoogleSignIn}>Continue With Google</button>
        </div>
    );
};

export default LoginSignUp;