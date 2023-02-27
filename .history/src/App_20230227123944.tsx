import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <iframe
          width="600"
          height="400"
          seamless
          src="https://superset.p.niva.no/superset/dashboard/26/"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
