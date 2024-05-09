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

  // function handleStepInc() {
  //   setStep((s) => s + 1);
  // }

  // function handleStepDec() {
  //   setStep((s) => s - 1);
  // }

  function handleCountInc() {
    setCount((c) => c + step);
  }

  function handleCountDec() {
    setCount((c) => c - step);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div className="step">
        <form>
          {/* <button onClick={handleStepDec}>-</button> */}
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>{step}</span>
          {/* <button onClick={handleStepInc}>+</button> */}
        </form>
      </div>
      <div className="count">
        <button onClick={handleCountDec}>-</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Days.."
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </form>

        <button onClick={handleCountInc}>+</button>
      </div>
      <div className="text">{text()}</div>

      {count > 0 || step > 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </>
  );
}

export default App;
