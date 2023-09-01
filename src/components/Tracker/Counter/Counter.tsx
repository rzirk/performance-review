import { useState } from "react";
import "./Counter.css";



function Counter() {

  const [counter, setCounter] = useState(0);
  const [name] = useState("Test");

  
  function addOnClick() {
    setCounter(counter + 1)
  }

  function subtractOnClick() {
    setCounter(counter -1)
  }

  return (
    <div id="+ widget.id + ">
        <span>{name}</span>
        <button onClick={subtractOnClick} >-</button  >
        <input type="number" value={counter}/>
        <button onClick={addOnClick}>+</button >
    </div >
  );
}
export default Counter;
