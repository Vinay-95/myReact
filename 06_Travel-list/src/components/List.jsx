export function List({ list, onDeleteItems, onCkeckedItem }) {
  return (
    <li style={list.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={list.packed}
        onChange={() => onCkeckedItem(list.id)}
      />
      <span>
        {list.quantity} {list.description}{" "}
        <button onClick={() => onDeleteItems(list.id)}>❌</button>
      </span>
    </li>
  );
}
