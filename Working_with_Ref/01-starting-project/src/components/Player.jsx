import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  //  Accessing HTML elements via Ref()
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    // Clearing the input box manually
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
