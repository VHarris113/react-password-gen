import React from 'react';
import Navbar from "./components/Navbar";
import PasswordBody from "./components/PasswordBody";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <PasswordBody />
    </div>
  );
}

export default App;
