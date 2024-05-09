import { useState } from "react";
import "./App.css";
import { Children } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip2, setTip2] = useState(0);

  return (
    <>
      <BillAmount amount={amount} setAmount={setAmount} />
      <FirstTip tip={tip} setTip={setTip}>
        How did you like the service?
      </FirstTip>
      <FirstTip tip={tip2} setTip={setTip2}>
        How did your friend like the service?
      </FirstTip>
      <TotalBill tip2={tip2} amount={amount} tip={tip} />
      <Reset
        setAmount={setAmount}
        setTip={setTip}
        setTip2={setTip2}
        amount={amount}
      />
    </>
  );
}

function BillAmount({ amount, setAmount }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ amount });
    // setAmount(0);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>How much was the bill? </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        ></input>
      </form>
    </div>
  );
}

function FirstTip({ tip, setTip, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log({ discount });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>{children} </label>
        <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
          <option value={0} key={0}>
            Dissatisfied (0%)
          </option>
          <option value={5} key={5}>
            It was okay (5%)
          </option>
          <option value={10} key={10}>
            It was good (10%)
          </option>
          <option value={20} key={20}>
            Absolutely amazing (20%)
          </option>
        </select>
      </form>
    </div>
  );
}

function TotalBill({ amount, tip, tip2 }) {
  const avg = (tip + tip2) / 2;
  const percentage = (avg / 100) * amount;
  const total = amount + percentage;
  return (
    <>
      {amount > 0 && (
        <div>
          <h2>{`You pay $${total} ($${amount} + $${percentage.toFixed(
            1
          )} tip)`}</h2>
        </div>
      )}
    </>
  );
}

function Reset({ setAmount, setTip, setTip2, amount }) {
  function handleClick() {
    setAmount(0);
    setTip(0);
    setTip2(0);
  }
  return (
    <div>{amount > 0 && <button onClick={handleClick}>Reset</button>}</div>
  );
}

export default App;
