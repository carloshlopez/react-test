import React, { Component } from 'react';
import Welcome from './Welcome.js'
import './App.css';

class App extends Component {
  render() {
    const names = ['a name', 'another nbane', 'Laura'];
    return (
        <div>
        <Welcome name="Pepe" />
        <Welcome name="Pepe 2" />
                
        {names.map(name =>
          <Welcome name={name}/>
        )
          
        }
                
        </div>
    );
  }
}

export default App;
