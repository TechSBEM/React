export default function TabButton({ onselect, children, isSelected }) {
  return (
    <li>
      {/* Using "onSelect as a pointer for the click event in the App.jsx" */}
      <button className={isSelected ? 'active': null} onClick={onselect}>{children}</button>
     
    </li>
  );
}
