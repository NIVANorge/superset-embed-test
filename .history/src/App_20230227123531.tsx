import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className="card">
        <iframe
  width="600"
  height="400"
  seamless
  frameBorder="0"
  scrolling="no"
  src="https://superset.t.niva.no/superset/explore/p/z7pVKM8l8AD/?standalone=1&height=400"
>
</iframe>
        
      </div>
     
    </div>
  )
}

export default App
