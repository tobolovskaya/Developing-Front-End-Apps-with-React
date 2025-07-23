import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Wellcome!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;


