import { useState } from 'react';
import useSocketHook from './useSocket';
import './App.css';

function App() {
  const {response, sendMessage} = useSocketHook();
  const [message, setMessage] = useState("");

  const submitMessage = (e) => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <ul>
        {response.map((msg) => (<li>{msg}</li>))}
      </ul>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        ></input>
      <button onClick={() => submitMessage()}>Send</button>
    </div>
  );
}

export default App;
