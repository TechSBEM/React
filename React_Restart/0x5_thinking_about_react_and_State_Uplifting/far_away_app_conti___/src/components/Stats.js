export default function Stats({ items }) {
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
