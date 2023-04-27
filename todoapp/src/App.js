import './App.css';
import React, {useState} from 'react';
import Login from './Login';
import { TaskDisplay } from './TaskDisplay';
import Divider from '@mui/material/Divider';
import UserTitleContext from './context/UserTitleContext';
import Timer from './Timer.js';

function App() {
  // At some point make users a global state
  // const [users, setUser] = useState([
  //   {name: userName, title: listTitle, pass: password},
  // ]);
  const [userTitle, setUserTitle] = useState({
    username: '',
    title: '',
    password: '',
  })

  return (
    <UserTitleContext.Provider value={{userTitle, setUserTitle}}>
      <div id='main' style={{backgroundColor: 'grey'}}>
        <Login />
        <Divider textAlign='center'></Divider>
        <TaskDisplay />
        <Divider textAlign='center'></Divider>
        <Timer />
      </div>
    </UserTitleContext.Provider>
  );
}

export default App;