import reactImage from "../assets/react-core-concepts.png";
import './Header.css'

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  // Declaring a variable for randomly displaying the reactDescriptions values in the array
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      {/* \The use of "{}" is for dynamic not static code */}
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}