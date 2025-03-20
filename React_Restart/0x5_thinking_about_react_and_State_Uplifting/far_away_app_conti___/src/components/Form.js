import { useState } from "react";
export default function Form({ onAddItems }) {
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
