import { CORE_CONCEPTS } from "./data.js";
import Header from "./component/Header/Header.jsx";
import CoreConcept from "./component/CoreConcept.jsx";
import TabButton from "./component/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  // ------------Rules for React Hooks--------------
  // 1.Only call hooks inside of a componet function
  // 2. Only call hooks on the top level not nested

  // --------------------------------------USESTATE------------------------------
  const [selectedValue, setSelectedValue] = useState("");

  // Create a function for the button when clicked
  function handleSelect(selectedButton) {
    // SelectedButton = 'component', 'prop', 'JSX', 'State'
    setSelectedValue(selectedButton);
    // console.log(selectedValue);c
  }

  // Using a variable for the dianamic display
  let TabContent = <p>Please Click any button</p>;

  if (selectedValue) {
    TabContent = (
      <div id="tab-content ">
        <h3>{EXAMPLES[selectedValue].title}</h3>
        <p>{EXAMPLES[selectedValue].description}</p>
        <pre>
          <code>{EXAMPLES[selectedValue].code}</code>
        </pre>
      </div>
    );
  }
  return (
    // Using "Fragment(<>...</>) instead of "<div></div>" let you group elements without a wrapper"
    <>
      <Header />
      <main>
        {/* The ID for styling the concepts */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/*----------------------------------map & destructuring--------------------------------- */}
            {/* USING "map" with destructuring */}
            {CORE_CONCEPTS.map((values, index) => (
              <CoreConcept key={index} {...values} />
            ))}

            {/* -----------------------------Destructuring------------------------------------------- */}
            {/* 
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

             */}
            {/* ----------------------------------------------------------------------------------------- */}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          {/* The menu tag is used for creating a list of button */}
          <menu>
            <TabButton isSelected={selectedValue ==='components'} onselect={() => handleSelect("components")}>
              Components
            </TabButton>
            {/* "children " used here is a prop for the TabButton function */}
            <TabButton isSelected={selectedValue ==='jsx'} onselect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedValue ==='props'} onselect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedValue ==='state'} onselect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {/* -------------------------------------------------------------------------------------------- */}
          {/* Using ternary can also work */}

          {/*           {!selectedValue && <p>Please Select a Topic</p>} */}

          {/* The selectedValue might be Component, JSX, Props or State
                When one is selected, the code will look like:

                EXAMPLE['Component'].title
            */}

          {/*           {selectedValue && (
            <div id="tab-content ">
              <h3>{EXAMPLES[selectedValue].title}</h3>
              <p>{EXAMPLES[selectedValue].description}</p>
              <pre>
                <code>{EXAMPLES[selectedValue].code}</code>
              </pre>
            </div>
          )} */}

          {/* ----------------------------------------------------------------------------------------------------- */}

          {TabContent}
        </section>
      </main>
    </>
  );
}

export default App;
