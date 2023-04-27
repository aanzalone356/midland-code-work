import React, {useRef} from 'react';
import InfoBox from '../styled/elements/InfoBox';
import Button from '../styled/elements/Button';
import Container from '../styled/elements/Container';
import Text from '../styled/elements/Text';
import { useUserContext } from '../context/UserContext';

function Login () {
    //
    const username = useRef('');
    const password = useRef('');
    const { setUser } = useUserContext();

    const handleInput = (e,inputType) => {
        let value = e.target.value;
        if(inputType === 'username'){
            username.current = value;
        } else if(inputType === 'password'){
            password.current = value;
        }
    }

    const setupUser = () => {
        let users = [ {username: username.current, password: password.current, favId: setUser.length}];
        setUser(users);
        console.log(users);
    }

    return (
        <Container>
            <Container>
                <Text>Welcome to Gif-Station!</Text>
            </Container>
            <InfoBox placeholder='Username' onChange={(e)=>handleInput(e,'username')}></InfoBox>
            <InfoBox placeholder='Password' onChange={(e)=>handleInput(e,'password')}></InfoBox>
            <Button onClick={()=>setupUser()}>Login</Button>
        </Container>
    )
}

export default Login;