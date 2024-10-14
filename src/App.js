import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { getValueFunc } from "./helper";

function App() {
  const [data, setData] = useState([]);
  const [btnData, setBtnData] = useState("");
  const [btnValue, setBtnValue] = useState("");
  const setValue = () => {
    setBtnValue("test");
  };
  return (
    <div className="App">
      <p>first case</p>
      {/* <input
        type="text"
        placeholder="Enter your name"
        id="username"
        name="username"
        readOnly
        value="Mehroz"
      /> */}
      <input
        type="text"
        placeholder="Enter name"
        id="name"
        name="name"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      {/* <h2>hlo g</h2> */}
      <button onClick={() => setBtnData("updated")}>button</button>
      <button data-testid="btn1" onClick={setValue}>
        button
      </button>
      <button  onClick={getValueFunc}>
        button
      </button>
      <h1>{btnData}</h1>
    </div>
  );
}

export default App;
