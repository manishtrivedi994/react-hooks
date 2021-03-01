import { useState } from 'react';
import './App.css';

function App() {

  const [status] = useState("not Delivered");

  return (
    <div className="App">
      <h1>The package is not {status}.</h1>
    </div>
  );
}

export default App;
