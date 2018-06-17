import React, { Component } from 'react';

import Spells from './SpellsContainer'
import Abilities from './AbilitiesContainer'
import Skills from './Skills'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card full">
          <h2>Ezekiel Hammersmith</h2>
        </div>
        <div className="card half">
          <Spells />
        </div>
        <div className="card half">
          <Abilities />
        </div>
        <div className="card half">
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
