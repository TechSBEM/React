import CoreConcepts from "./component/CoreConcepts.jsx";
import Header from "./component/Header/Header.jsx";
import Examples from "./component/Examples.jsx";


function App() {

  return (
    // Using "Fragment(<>...</>) instead of "<div></div>" let you group elements without a wrapper"
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples   />

      </main>
    </>
  );
}

export default App;
