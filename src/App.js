import { useEffect, useReducer, useState } from 'react';
import './App.css';

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return <>
      <input type="checkbox" onChange={toggle} value={checked}/>
      {checked ? "checked" : "not checked"}
      </>
}

export default App;
