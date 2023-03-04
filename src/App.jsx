import React, { useState } from "react";

let curtime = new Date();
curtime = curtime.getHours();
let greet = "";
const style = {};

if (curtime >= 1 && curtime < 12) {
  greet = "Good Morning";
  style.color = "green";
} else if (curtime >= 12 && curtime < 17) {
  greet = "Good Afternooon";
  style.color = "orange";
} else if (curtime >= 17 && curtime < 21) {
  greet = "Good Evening";
  style.color = "red";
} else {
  greet = "Good Night";
  style.color = "blue";
}

function App() {
  const [name, setName] = useState("Anu");
  const [fName, setFname] = useState();
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const onsubmit = () => {
    setFname(name);
  };

  return (
    <>
      <div className="head">
        <h1>
          Hello {fName} <span style={style}>{greet}...</span>!!!   
        </h1>
      </div>
      <div className="input_field">
        <input
          type="text"
          placeholder="Enter the name"
          onChange={inputEvent}
          value={name}
        />
        <button onClick={onsubmit}>Click Me</button>
      </div>
    </>
  );  
}

export default App;
