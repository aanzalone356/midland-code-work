import logo from './logo.svg';
import './App.css';
import Divider from '@mui/material/Divider';
import DisplayTiers from './DisplayTiers';
import Login from '.../todoapp/src/Login.js';
import DisplayItems from './DisplayItems';

function App() {
  return (
    <div className="App">
      <Login />
      <Divider />
      <DisplayTiers />
      <Divider />
      <DisplayItems />
    </div>
  );
}

export default App;
