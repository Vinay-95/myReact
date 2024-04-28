import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();

  date.setDate(date.getDate() + count);

  const newDate = date.toDateString();
  // console.log(newDate);
  function text() {
    let result;
    if (count > 0) {
      result = `${count} days from today is ${newDate}`;
    } else if (count < 0) {
      result = `${Math.abs(count)} days ago was ${newDate}`;
    } else {
      result = `Today is ${newDate}`;
    }
    return <h2 style={{ fontFamily: "monospace" }}>{result}</h2>;
  }

  function handleStepInc() {
    setStep((s) => s + 1);
  }

  function handleStepDec() {
    setStep((s) => s - 1);
  }

  function handleCountInc() {
    setCount((c) => c + step);
  }

  function handleCountDec() {
    setCount((c) => c - step);
  }
  return (
    <>
      <div className="step">
        <button onClick={handleStepDec}>-</button>
        <p>Step : {step}</p>
        <button onClick={handleStepInc}>+</button>
      </div>
      <div className="count">
        <button onClick={handleCountDec}>-</button>
        <p>Count : {count}</p>
        <button onClick={handleCountInc}>+</button>
      </div>
      <div className="text">{text()}</div>
    </>
  );
}

export default App;
