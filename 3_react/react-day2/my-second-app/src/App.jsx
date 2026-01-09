import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";

function App() {
  return (
    <>
      <Counter />
      <Fruits />
    </>
  );
}

export default App;
