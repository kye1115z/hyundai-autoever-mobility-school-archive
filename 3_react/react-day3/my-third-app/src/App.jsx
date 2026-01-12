import "./App.css";
import Login from "./components/Login";
import SharedCounter from "./components/SharedCounter";
// import { useState } from "react";
// import Everytime from "./components/Everytime";
// import Once from "./components/Once";
// import WithState from "./components/WithState";
// import SetInterval from "./components/SetInterval";
// import SetIntervalCleanUp from "./components/SetIntervalCleanUp";
import TitleCounter from "./components/TitleCounter";

function App() {
  // const [isShow, setIsShow] = useState(true);

  return (
    <>
      {/* <Everytime /> */}
      {/* <Once /> */}
      {/* <WithState /> */}

      {/* {isShow && <SetIntervalCleanUp />}
      <button onClick={() => setIsShow(false)}>언마운트</button> */}

      {/* <TitleCounter /> */}
      {/* <Login /> */}
      <SharedCounter />
    </>
  );
}

export default App;
