import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      names: []
    }
    
    axios.get("http://react-test-carloshlopez.c9users.io:8081/names")
    .then(resp => {
      console.log("OK api call", resp);
      this.setState({
        names: resp.data
      })
    })
    .catch(error =>{
      console.log("ERROR api call", error)
    })
    
  }
  
  render() {
    return (
        <div>
        <h1>Hey</h1>
        <p>This are the names</p>
        <ul>
          {this.state.names.map(name =>
            <li key={name}>{name}</li>
          )}
        </ul>
        </div>
        
    );
  }
}

export default App;
