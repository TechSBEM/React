import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
    return(
                <section id="core-concepts">
                  <h2>Core Concepts</h2>
                  <ul>
                    {/* USING "map" with destructuring */}
                    {CORE_CONCEPTS.map((values, index) => (
                      <CoreConcept key={index} {...values} />
                    ))}

                  </ul>
                </section>
    );
}