import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  `Apply for jobs  💼`,
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [open, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Emma" });
  // const step = 1;
  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
    // setTest({ name: "Samm" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}> 3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
