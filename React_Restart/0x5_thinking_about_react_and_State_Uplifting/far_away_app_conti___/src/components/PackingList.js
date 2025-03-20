import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // console.log(item);

  const [sortBy, setSortBy] = useState("input");
  if (!item.length) return <div className="list"></div>;

  let sortedItems;

  if (sortBy === "input") sortedItems = item;

  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  // else{
  //   setSortBy(item.slice)
  // }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClearList}>Clear</button>
      </div>
    </div>
  );
}
