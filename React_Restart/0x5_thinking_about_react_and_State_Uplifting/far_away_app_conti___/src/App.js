import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "charger", quantity: 12, packed: false },
// ];

export default function App() {
  // Reason for upliftiing the state is that: The ites array is used by both the "Form" and "PackingList"
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    // Deleting items in a list
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    // What happens to be toggled
    // ===there should be a new array with the "items.packed" = "true".  The inital one is "false"
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        item={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuauntity] = useState(1);

  function handleSubmit(e) {
    // Prevent default re-rending of pages whenever there is changes in the form
    e.preventDefault();
    if (!description) return;

    const newList = { description, quantity, packed: false, id: Date.now() };
    console.log(newList);
    // console.log(set)
    onAddItems(newList);

    setDescription("");
    setQuauntity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      {/* An array to get 20 numbers together with map */}
      <select
        value={quantity}
        onChange={(e) => setQuauntity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (cur, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="text..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingList({ item, onDeleteItem, onToggleItem }) {
  // console.log(item);

  const [sortBy, setSortBy] = useState("input");

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
        <button>Clear</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
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

function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numOfItems = items.length;
  const numOfAlreadyPacked = items.filter((items) => items.packed).length;
  const percentPacked = Math.round((numOfAlreadyPacked / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numOfItems} items on your list, and you already packe
        ${numOfAlreadyPacked}(${percentPacked})%`}
      </em>
    </footer>
  );
}

// Calculating the number of items in the list
