import {React, useContext, useRef} from "react";
import { useLoginContext } from "../context/loginContext";
import { TextField } from "@mui/material";
import Button from "@mui/material"

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
        console.log(users);
    }

    return(
        <div>
        <TextField
            id="username"
            label="Username"
            onChange={() => {
            handleInput(e,'username');}}/>
        <TextField
            id="password"
            label="Password"
            onChange={() => {
            handleInput(e,'password');}}/>
        <Button
            onClick={() => {
            setUpUser();}}>
            Login</Button>
        </div>
    );
}

export default Login;