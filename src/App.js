
import { useState } from 'react';
import './App.css';


function App() {

  const [bgColor, setBgColor] = useState("black");

  return (
    <div className="App"
        style={{backgroundColor: bgColor}}
      >
      
      <div className='btn-container'>
        <div className='btn-holder'>
        <button
            style={{backgroundColor:"white", color: "black"}}
            onClick={() => setBgColor("white")}
          >White</button>

          <button
            style={{backgroundColor:"red", color: "black"}}
            onClick={() => setBgColor("red")}
          >Red</button>

          <button
            style={{backgroundColor:"blue", color: "black"}}
            onClick={() => setBgColor("blue")}
          >Blue</button>

          <button
            style={{backgroundColor:"green", color: "black"}}
            onClick={() => setBgColor("green")}
          >Green</button>

          <button
            style={{backgroundColor:"yellow", color: "black"}}
            onClick={() => setBgColor("yellow")}
          >Yellow</button>

          <button
            style={{backgroundColor:"pink", color: "black"}}
            onClick={() => setBgColor("pink")}
          >Pink</button>

          <button
            style={{backgroundColor:"orange", color: "black"}}
            onClick={() => setBgColor("orange")}
          >Orange</button>

          <button
            style={{backgroundColor:"purple", color: "black"}}
            onClick={() => setBgColor("purple")}
          >Purple</button>

          <button
            style={{backgroundColor:"magenta", color: "black"}}
            onClick={() => setBgColor("magenta")}
          >Magenta</button>

          <button
            style={{backgroundColor:"black", color: "white"}}
            onClick={() => setBgColor("black")}
          >Black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
