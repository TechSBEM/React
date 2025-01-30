export default function TabButton({ onselect, children }) {
  return (
    <li>
      {/* Using "onSelect as a pointer for the click event in the App.jsx" */}
      <button onClick={onselect}>{children}</button>
     
    </li>
  );
}
