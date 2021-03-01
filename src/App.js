import { useState } from 'react';
import './App.css';

function App() {

  const [status, setStatus] = useState("not Delivered");

  return (
    <div className="App">
      <h1>The package is not {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

export default App;
