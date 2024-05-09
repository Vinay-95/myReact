export function Footer({ items }) {
  {
    if (items.length === 0)
      return <div className="stats">Start adding items to the list😒</div>;
  }

  const itemCount = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / itemCount) * 100);

  return (
    <div className="stats">
      {percentage === 100
        ? "You have packed everything😍"
        : `🎁 You have ${itemCount} items on your list, and you already packed
      ${packed} (${percentage}%)`}
    </div>
  );
}
