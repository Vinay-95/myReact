import { useState } from "react";
import { List } from "./List";

export function ListItems({ items, onDeleteItems, onCkeckedItem, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleClearList() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <List
            list={item}
            onDeleteItems={onDeleteItems}
            onCkeckedItem={onCkeckedItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
