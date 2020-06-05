import React from 'react';
import './App.css';
import DrumSet from './DrumSet'

function App() {
  return (
    <div className="App pt-5">
      <h1 id='title' className="flux">&lt;_Lou/&gt; React drum machine</h1>
      <DrumSet />
      <footer className="pt-5" sticky="bottom"> &lt;_Lou/&gt; 2020</footer>
    </div>
  );
}

export default App;
