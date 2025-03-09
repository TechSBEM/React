import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "charger", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    // Deleting items in a list
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList item={items} onDeleteItem={handleDeleteItems} />
      <Stats />
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
    e.preventDefault();
    if (!description) return;

    const newList = { description, quantity, package: false, id: Date.now() };
    console.log(newList);
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

function PackingList({ item, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X(X)%</em>
    </footer>
  );
}
