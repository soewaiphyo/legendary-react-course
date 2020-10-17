import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Pet {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  showMagicName() {
    return this._makeMagicName(10);
  }

  _makeMagicName(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

class Cat extends Pet {
  constructor(name, breed, eyeColor) {
    super(name, breed);
    this.eyeColor = eyeColor;
  }

  sayMeow() {
    return "Meowwww";
  }
}

class Dog extends Pet {
  constructor(name, breed, hasTail) {
    super(name, breed);
    this.hasTail = hasTail;
  }

  waveTail() {
    return "waving tail";
  }
}
function App() {
  //const car = new Car("Honda");
  const cat = new Cat("shwewar", "ginger cat", "grey");
  const dog = new Dog("Bango", "teria", true);
  const dogTwo = new Dog("bussu", "pee nyaung", false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>cat name is {cat.name}</p>
        <p>My magic name is {cat.showMagicName()}</p>
        <p>hello world 123 4567!</p>
        <br></br>
        <p>{cat.sayMeow()}</p>
        <br></br>
        <p style={{ backgroundColor: "green" }}>
          {dog.name}
          <br></br>
          {dog.showMagicName()}
          <br></br>
          {dog.hasTail && dog.waveTail()}
        </p>
        <p style={{ backgroundColor: "orange" }}>
          {dogTwo.name}
          <br></br>
          {dogTwo.showMagicName()}
          <br></br>
          {dogTwo.hasTail && dog.waveTail()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
