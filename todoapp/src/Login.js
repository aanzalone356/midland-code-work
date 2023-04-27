import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import Button from './Styled/Button.js';
import Container from './Styled/Container.js';
import Input from './Styled/Input.js';
import Label from './Styled/Label.js';
import Text from './Styled/Text.js';


function Login(){
  const userName = useRef('');
  const listTitle = useRef('');
  const password = useRef('');

  //This is a display of context. We take this from UserTitleContext
  const [userTitle, setUserTitle] = useState({
    username: '',
    title: '',
    password: '',
  })

  const handleUserInfo = (e, inputType) => {
    const value = e.target.value;
    if(inputType === 'username'){
      userName.current = value;
    } else if(inputType === 'listTitle'){
      listTitle.current = value;
    } else if(inputType === 'password'){
      password.current = value;
    }
  }

  const handleUser = () => {
    setUserTitle({username: userName.current, title: listTitle.current, password: password.current});
    console.log(userTitle.title)
  }
  useEffect(() => { 
    document.title = userTitle.title;
    document.getElementById('titleDisplay').innerHTML = userTitle.title;
    document.getElementById('displayUsername').innerHTML = userTitle.username;
  }, [userTitle]);

  return(
      <Container top id='loginMain' grey>
        <Label>Username<Input login style={{marginLeft: '30px'}}  id='username' onChange={(e) => handleUserInfo(e,'username')} placeholder='Username'></Input><Text style={{display: 'inline', textAlign: 'right'}} id='displayUsername'></Text></Label>
        <Label>List Title<Input login style={{marginLeft: '43px'}}  id='listTitle' onChange={(e) => handleUserInfo(e,'listTitle')} placeholder='Title'></Input></Label>
        <Label>Password<Input login bottom style={{marginLeft: '35px'}}  id='userPassword' onChange={(e) => handleUserInfo(e,'password')} placeholder='Password'></Input></Label>
        <Button primary moveleft id='login' onClick={() => handleUser()}>Login</Button>
        <Text title id='titleDisplay'></Text>
      </Container>
  )
}

export default Login;