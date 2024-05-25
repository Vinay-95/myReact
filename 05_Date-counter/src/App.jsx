import { useReducer } from "react";
import "./App.css";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "count":
      return { ...state, count: action.payload };
    case "step":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown Error");
  }
}

function App() {
  const [changingState, dispatch] = useReducer(reducer, initialState); // reducer is a function

  const { count, step } = changingState;

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

  function handleSubmit(e) {
    e.preventDefault();
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
            onChange={(e) =>
              dispatch({ type: "step", payload: Number(e.target.value) })
            }
          />
          <span>{step}</span>
          {/* <button onClick={handleStepInc}>+</button> */}
        </form>
      </div>
      <div className="count">
        <button onClick={() => dispatch({ type: "dec" })}>-</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Days.."
            value={count}
            onChange={(e) =>
              dispatch({ type: "count", payload: Number(e.target.value) })
            }
          />
        </form>

        <button onClick={() => dispatch({ type: "inc" })}>+</button>
      </div>
      <div className="text">{text()}</div>

      {count > 0 || step > 1 || count < 0 ? (
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      ) : null}
    </>
  );
}

export default App;
