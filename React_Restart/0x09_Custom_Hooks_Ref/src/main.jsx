import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import StartRating from "./StarRating";

// function Test() {
//   const [movieRating, setMoviesRating] = useState(0);
//   return (
//     <div>
//       <StartRating color="blue" maxRating={10} onSetRating={setMoviesRating} />
//       <p>The movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StartRating messages={["bad", "nice", "nicer", "best", "top ranked"]} />
    <StartRating maxRating={10} size={24} color="red" />
    <Test /> */}
  </StrictMode>
);
