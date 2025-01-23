import { Map } from "./Map";
import { Detailed } from "./detailed/Detailed";
import { Simple } from "./Simple";
import { Toggle } from "./Toggle";
import { TestSpring } from "./Test";
import { ProgressContext } from "./progress/Step";
import { useState } from "react";
import { Data } from "./data";

export const Overview = () => {
  const [detailed, setDetailed] = useState(false);
  return <Data>
    <Toggle detailed={detailed} setDetailed={setDetailed}/>
    <Map/>
    <ProgressContext.Provider value={{}}>
      <Detailed detailed={detailed}/>
      <Simple detailed={detailed}/>
    </ProgressContext.Provider>
  </Data>;
}
