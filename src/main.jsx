import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
function ref() {
  root.render(<App/>);
}
setInterval(ref, 1000);
