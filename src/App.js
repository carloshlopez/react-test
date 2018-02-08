import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const arr = ['1', '2','3'];
    return (
      <div>
        <h1>Hey</h1><p>edaf</p>
        
        
        <ul>
          {arr.map(a =>
             <li>{a}</li>
          )}
        </ul>
        
        </div>
        
        
    );
  }
}

export default App;
