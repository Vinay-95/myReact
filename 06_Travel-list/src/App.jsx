import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 2, packed: true },
  { id: 4, description: "Jeans", quantity: 4, packed: false },
  { id: 5, description: "Shirts", quantity: 7, packed: false },
];

function App() {
  return (
    <>
      <Header />
      <Form />
      <ListItems />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="">
      <h1>🏝️Far Away✈️</h1>
    </div>
  );
}

function Form() {
  const [description, setDecription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    // console.log(e);
    const newItem = { quantity, description, id: Date.now(), packed: false };
    console.log(newItem);
    setDecription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>What do you need for your 😍 trip</p>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((nums) => (
          <option value={nums} key={nums}>
            {nums}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => setDecription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function ListItems() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <List items={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function List({ items }) {
  return (
    <li style={items.packed ? { textDecoration: "line-through" } : {}}>
      <span>
        {items.quantity} {items.description} <button>❌</button>
      </span>
    </li>
  );
}

function Footer() {
  return (
    <div className="stats">
      🎁 You have %x% items on your list, and you already packed %0% (0%)
    </div>
  );
}
export default App;
