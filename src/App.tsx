import React from 'react';
import './App.css';
import { GroupPicker } from './GroupPicker';
import { Group } from './Group';

let groups: Array<Group> = require('./groups.json').groups;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GroupPicker groupPicker={(): Group => {
          return groups[Math.floor(Math.random() * groups.length)]
        }}/>
      </header>
    </div>
  );
}

export default App;
