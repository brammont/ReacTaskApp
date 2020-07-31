import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Navigation />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
