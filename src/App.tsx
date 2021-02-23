import React from 'react';
import './App.css';
import Footer from './Footer';
import { Questions } from './Questions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Am I agile?</h3>
        <Questions />
        <Footer />
      </header>
    </div>
  );
}

export default App;
