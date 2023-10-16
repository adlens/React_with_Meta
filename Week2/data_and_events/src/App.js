import React, { useState } from "react";
import "./App.css";
import Heading from "./Heading";

function App() {
  const [word, setWord] = React.useState("Hello");
  function handleClick() {
    setWord("Drink");
  }
  return (
    <div className="App">
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
