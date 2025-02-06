export default function TabButton({  children, isSelected, ...props }) {
  return (
    <li>
      {/* Using "onSelect as a pointer for the click event in the App.jsx" */}
      <button className={isSelected ? "active" : null} {...props}>
        {children}
      </button>
    </li>
  );
}
