import axios from 'axios';
import {React, useState, useRef} from "react";
import { useLoginContext } from "../context/loginContext";
import { TextField } from "@mui/material";
import Button from '../styled/elements/Button'
import InfoBox from "../styled/elements/InfoBox";
import Container from '../styled/elements/Container';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    //
    const [username, setUsername] = useState("");
    const password = useRef('');
    const [error, setError] = useState();
    const {setUser} = useLoginContext();

    const firebaseConfig = {
        apiKey: "AIzaSyBy4YIEGqsoh8hwxoB12kIA_LN-nrknsFU",
        authDomain: "anilist-f834c.firebaseapp.com",
        projectId: "anilist-f834c",
        storageBucket: "anilist-f834c.appspot.com",
        messagingSenderId: "409621548238",
        appId: "1:409621548238:web:e49a8cc6ca2e7d68a3549f",
        measurementId: "G-SD87NCNMMQ"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    const handleGoogleSignOn = (e, props) => {
        //
        e.preventDefault();

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(async (results) => {
            const user = results.user;
            setUsername(user.displayName);
            try{
                if(user){
                    const response = await axios.post("http://localhost:3006/googleSignOn", {
                        username: username,
                    });

                    if(response.status === 200){
                        setUser({username: username});
                    } else {
                        console.error("Error Loggin In");
                    }
                }
            } catch (error) {
                console.error(error);
                if(error.response && error.response.status === 400){
                    console.log(error.response.data.error);
                }
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    } 

    const handleInput = (e, input) => {
        let value = e.target.value;
        if(input === 'username'){
            setUsername(value);
        }else if(input === 'password'){
            password.current = value;
        }
    };

    const setUpUser = async (e) => {
        if(e.target.value){
            //
            try{
                const response = await axios.post("http://localhost:3006/" + e.target.value, {
                    username: username,
                    password: password.current,
                });

                if(response.status === 200){
                    setUser({ username });
                } else {
                    console.error("Error logging in");
                }
            } catch(err){
                console.error(err);
                if(err.response && err.response.status === 400){
                    setError(err.response.data.error);
                    console.log(error);
                }
            }
        } else {
            //
        }
    }

    // More CSS 8^)
    return(
        <Container>
        <InfoBox placeholder='Username'  onChange={(e)=>handleInput(e,'username')}></InfoBox>
        <InfoBox placeholder='Password'  onChange={(e)=>handleInput(e,'password')}></InfoBox>
        <Button primary
            value="login"
            onClick={(e) => setUpUser(e)}>
            Login
        </Button>
        <Button primary
            value="register"
            onClick={(e) => setUpUser(e)}>
            Register
        </Button>
        <Button 
            value="googleSignOn"
            onClick={(e) => handleGoogleSignOn(e)}>
            Sign In w/ Google
        </Button>
        </Container>
    );
}

export default Login;