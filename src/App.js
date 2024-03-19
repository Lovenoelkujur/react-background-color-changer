
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
            style={{backgroundColor:"white"}}
            onClick={() => setBgColor("white")}
          >White</button>

          <button
            style={{backgroundColor:"red"}}
            onClick={() => setBgColor("red")}
          >Red</button>

          <button
            style={{backgroundColor:"blue"}}
            onClick={() => setBgColor("blue")}
          >Blue</button>

          <button
            style={{backgroundColor:"green"}}
            onClick={() => setBgColor("green")}
          >Green</button>

          <button
            style={{backgroundColor:"yellow"}}
            onClick={() => setBgColor("yellow")}
          >Yellow</button>

          <button
            style={{backgroundColor:"pink"}}
            onClick={() => setBgColor("pink")}
          >Pink</button>

          <button
            style={{backgroundColor:"orange"}}
            onClick={() => setBgColor("orange")}
          >Orange</button>

          <button
            style={{backgroundColor:"purple"}}
            onClick={() => setBgColor("purple")}
          >Purple</button>

          <button
            style={{backgroundColor:"magenta"}}
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
