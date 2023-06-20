import {React, useContext, useRef} from "react";
import { useLoginContext } from "../context/loginContext";
import { TextField } from "@mui/material";
import Button from '../styled/elements/Button'
import InfoBox from "../styled/elements/InfoBox";
import Container from '../styled/elements/Container'

const Login = () => {
    //
    const username = useRef('');
    const password = useRef('');
    const {setUser} = useLoginContext();

    const handleInput = (e, inputType) => {
        let value = e.target.value;
        if(inputType === 'username'){
            password.current = value;
        }else if(inputType === 'password'){
            username.current = value;
        }
    };

    const setUpUser = () => {
        let user = [{username: username.current, password: password.current, listId: setUser.length}];
        setUser(user);
        console.log(user);
    }

    return(
        <Container>
        <InfoBox placeholder='Username' onChange={(e)=>handleInput(e,'username')}></InfoBox>
        <InfoBox placeholder='Password' onChange={(e)=>handleInput(e,'password')}></InfoBox>
        <Button primary
            onClick={() => setUpUser()}>
            Login</Button>
        </Container>
    );
}

export default Login;