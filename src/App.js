import { useState } from 'react';
import './App.css';
import { FaStar } from 'react-icons/fa'

const createArray = (length) => [
  ...Array(length)
]

function Star({ selected=false }) {
  return <FaStar color={selected? "red" : "gray"}/>
}

function StarRating({ totalStars=5 }) {
  return createArray(totalStars).map((n, i) => (<Star key={i}/>));
}
function App() {
    return (
      <StarRating totalStars={10}/>
  );
}

export default App;
