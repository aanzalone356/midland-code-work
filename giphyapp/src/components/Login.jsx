import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import InfoBox from '../styled/elements/InfoBox';
import Button from '../styled/elements/Button';
import Container from '../styled/elements/Container';
import Text from '../styled/elements/Text';
import { useUserContext } from '../context/UserContext';
import { userDBFinder } from '../functions/userDBFinder';

function Login () {
    //
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const { setUser } = useUserContext();
    let reqURL;

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
        </Container>
    )
}

export default Login;