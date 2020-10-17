import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function showDate() {
    console.log(Date());
  }

  const arrowShowDate = () => console.log(Date());
  const arrowMyName = (name, age) => (
    <div>
      hey ... {name}. I am {age} years old.
    </div>
  );

  //Destructure syntax
  const getProfile = (profile) => {
    const { name, age, sex } = profile;

    return (
      <div>
        Hello I am {name}. I am {age} years old. I am {sex}.
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {getProfile({
          name: "Lolita",
          age: 6,
          sex: "Female",
        })}
      </header>
    </div>
  );
}

export default App;
