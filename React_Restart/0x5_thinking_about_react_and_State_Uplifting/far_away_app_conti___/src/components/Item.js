export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      {/* Create a checkbox */}
      <input
        type="checkbox"
        value={item.package}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
