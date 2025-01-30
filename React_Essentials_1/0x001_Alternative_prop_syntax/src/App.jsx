
import {CORE_CONCEPTS} from "./data.js"
import Header from "./component/Header/Header.jsx";
import CoreConcept from "./component/CoreConcept.jsx";
import TabButton from "./component/TabButton.jsx";

// Create a function for the button when clicked
function handleSelect(selectedButton){
  // SelectedButton = 'component', 'prop', 'JSX', 'State'
  console.log(selectedButton)
}


function App() {
  return (
    <div>
      
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
            <TabButton onselect={()=> handleSelect('component')}>Component</TabButton>
            {/* "children " used here is a prop for the TabButton function */}
            <TabButton onselect={()=> handleSelect('JSX')} >JSX</TabButton>
            <TabButton onselect={()=> handleSelect('Props')} >Props</TabButton>
            <TabButton onselect={()=> handleSelect('State')} >State</TabButton>
          
          </menu>
          Dynamic content
        </section>
      </main>
    </div>
  );
}

export default App;
