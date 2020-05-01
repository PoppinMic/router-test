import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function testRoute() {
    window.location.hash = '#2222';
  }
  console.log('rendered');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={testRoute}>Test Route</button>
      </header>
    </div>
  );
}

export default App;
