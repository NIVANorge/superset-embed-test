import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {

  return (
    <div className="App">
      <div className="card">
        <iframe
          width="100%"
          height="1vh"
          seamless
          src="https://superset.p.niva.no/superset/dashboard/26/?standalone=true&preselect_filters=%7B%7D"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
