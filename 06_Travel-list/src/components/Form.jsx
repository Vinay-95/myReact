import { useState } from "react";

export function Form({ handleAddItems }) {
  const [description, setDecription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    // console.log(e);
    const newItem = { quantity, description, id: Date.now(), packed: false };
    console.log(newItem);
    handleAddItems(newItem);
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
