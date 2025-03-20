import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
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

  function handleClearList() {
    // THis is a boolean which should be confirmed by the user
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    // if (confirmed) setItems((items) => items.filter((items) => !items.id));
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        item={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// Calculating the number of items in the list
