import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {

  return (
    <div className="App">
        <iframe
          width="100%"
          height="vmax"
          seamless
          src="https://superset.p.niva.no/superset/dashboard/26/?standalone=true&preselect_filters=%7B%7D"
        ></iframe>
    </div>
  );
}

export default App;
