import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }


const Login = () => {
    const [user, setUser] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
                //console.log(user.email);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <section className='login text-center p-5 m-5'>
            <div></div>
            <div>
                <img className='img-fluid w-25 mb-5' src={logo} alt=""/> <br/>
                <h3>Login</h3>
                <button onClick={handleGoogleSignIn} className="btn btn-outline-primary rounded-pill mt-5">
                    <FontAwesomeIcon icon={faGoogle} /> Login with Google
                </button>
            </div>
        </section>
    );
};

export default Login;