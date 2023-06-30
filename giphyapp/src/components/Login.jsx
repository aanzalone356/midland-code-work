import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import InfoBox from '../styled/elements/InfoBox';
import Button from '../styled/elements/Button';
import Container from '../styled/elements/Container';
import Text from '../styled/elements/Text';
import { useUserContext } from '../context/UserContext';
import { userDBFinder } from '../functions/userDBFinder';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function Login () {
    //
    const firebaseConfig = {
        apiKey: "AIzaSyCs2VIKhIoz7lsLlxT9Wz3SQKWdKIfU0B8",
        authDomain: "giphyapp-7210b.firebaseapp.com",
        projectId: "giphyapp-7210b",
        storageBucket: "giphyapp-7210b.appspot.com",
        messagingSenderId: "954642878083",
        appId: "1:954642878083:web:1218bc799c8d0bf4f915b6",
        measurementId: "G-SG7TFS9C0K"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const { setUser } = useUserContext();
    let reqURL;

    const auth = getAuth();
    const handleGoogleSign = (e, props) => {
        //
        //This is used so just the button clicked is submitted no the whole form
        e.preventDefault();
        
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then(async (result) => {
            const user = result.user;
            const gUsername = user.displayName;
            try{
                if(user){
                    const response = await axios.post("http://localhost:3006/googleSignOn", {
                        username: gUsername
                    });
                    
                    if(response.status === 200){
                        setUser({username: gUsername});
                    } else {
                        console.error("Error logging in");
                    }
            }} catch (err){
                console.error(err);
                if(err.response && err.response.status === 400){
                    console.log(err.response.data.error);
                }
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
        
        
    }

    const handleInput = (e,inputType) => {
        let value = e.target.value;
        if(inputType === 'username'){
            setUsername(value);
        } else if(inputType === 'password'){
            setPassword(value);
        }
    };

    const handleLogin = async (e, logType) => {
        //
        e.preventDefault();

        // const accessPermission = userDBFinder(e, username, password, logType);

        // if(accessPermission && accessPermission.length === 0){
        //     //
        //     try {
        //         const response = await axios.post('http://localhost:3006/' + logType, {
        //             username: username,
        //             password: password,
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         });
    
        //         console.log(response);
                
        //         if(response.status === 200) {
        //             setUser({username});
        //         }else {
        //             console.error("Error Logging in");
        //         }
        //     } catch (err) {
        //         console.error(err);
        //         if (err.response && err.response.status === 400) {
        //         setError(err.response.data.error);
        //         }
        //     }
        // } else{
        //     //display accessPermission which will have error message
        //     setError(accessPermission);
        //     console.error(error);
        // }
        reqURL = 'http://localhost:3006/' + logType;

        try {
            const response = await axios.post(reqURL, {
              username: username,
              password: password
            });
      
            if (response.status === 200) {
              setUser({ username });
            } else {
              console.error("Error logging in");
            }
        } catch (err) {
            console.log(password);
            console.error(err);
            if (err.response && err.response.status === 400) {
              setError(err.response.data.error);
            }
        }
        
    };

    useEffect(() => {
        if(error) {
            alert(error);
            setError();
        }
    }, [error]);

    return (
        <Container>
            <Container>
                <Text>Welcome to Gif-Station!</Text>
            </Container>
            <InfoBox placeholder='Username' onChange={(e)=>handleInput(e,'username')}></InfoBox>
            <InfoBox placeholder='Password' onChange={(e)=>handleInput(e,'password')}></InfoBox>
            <Button data-testid='button' onClick={(e)=>handleLogin(e,"login")}>Login</Button>
            <Button data-testid='register' onClick={(e)=>handleLogin(e,"register")}>Register</Button>
            <Button onClick={(e) => handleGoogleSign(e)}>Sign in with Google</Button>
        </Container>
    )
}

export default Login;