import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
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
    <Section title="Examples" id="examples">
      {/* The menu tag is used for creating a list of button */}
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedValue === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            {/* "children " used here is a prop for the TabButton function */}
            <TabButton
              isSelected={selectedValue === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedValue === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedValue === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      ></Tabs>

      {TabContent}
    </Section>
  );
}
