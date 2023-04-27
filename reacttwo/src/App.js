import logo from './logo.svg';
import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export function Users(){
  const users = [
    {name: "Justin", age: 23, hair:"brown"},
    {name: "Jeff", age: 20, hair:"brown"},
    {name: "Julie", age: 26, hair:"blonde"},
    {name: "Jordan", age: 23, hair:"brown"},
  ]

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Hair: {user.hair}</p>
        </div>
      ))}
    </div>
  )
}

export function RandomNum(){
  const ranNum = Math.floor(Math.random() * 100);
  if(ranNum%2 === 1){
    return (
      <div>
        {`Number is odd ${ranNum}`}
      </div>
    )
  }
  else if(ranNum%2 === 0){
    return (
      <div>
        {`Number is even ${ranNum}`}
      </div>
    )
  }
}

export function PingSys(){
  function sysLog(){
    console.log("hello");
  }
  return (
    <div>
      <button id='someButton' onClick={sysLog}>Click Me</button>
    </div>
  )
}