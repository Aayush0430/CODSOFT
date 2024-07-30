niimport { useState } from "react";
import "./style.css";

function App() {
  let [value, setvalue] = useState("");

  function handle(e) {
    setvalue(value + e.target.innerHTML);
  }
  function handlezero(e) {
    if (value == "0") {
    } else {
      setvalue(value + e.target.innerHTML);
    }
  }

  function equal() {
    setvalue(eval(value));
  }
  function ClearAC() {
    setvalue("");
  }
  function Delete() {
    setvalue(value.toString().slice(0, -1));
  }

  return (
    <div className="outer">
      <center>
        <h2>CALCULATOR</h2>
      </center>
      <div className="calculator">
        <div className="output">
          <input type="text" readOnly placeholder="0" value={value} />
        </div>
        <button className="span-two" onClick={ClearAC}>
          AC
        </button>
        <button onClick={Delete}>⌫</button>
        <button onClick={handle}>/</button>
        <button onClick={handle}>1</button>
        <button onClick={handle}>2</button>
        <button onClick={handle}>3</button>
        <button onClick={handle}>*</button>
        <button onClick={handle}>4</button>
        <button onClick={handle}>5</button>
        <button onClick={handle}>6</button>
        <button onClick={handle}>+</button>
        <button onClick={handle}>7</button>
        <button onClick={handle}>8</button>
        <button onClick={handle}>9</button>
        <button onClick={handle}>-</button>
        <button onClick={handle}>.</button>
        <button onClick={handlezero}>0</button>
        <button className="span-two" onClick={equal}>
          =
        </button>
      </div>
    </div>
  );
}
export default App;
