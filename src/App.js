import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "default"
    }
  }
  
  render() {
    return (
        <div>
          <h1>Hey</h1>
          <input type="text" value={this.state.name} onChange={this.updateName.bind(this)}/>
          <button onClick={this.sayHi.bind(this)}>Hi!</button>
        </div>
    );
  }
  
  sayHi(){
    console.log("Hi!!", this.state.name);
  }
  
  updateName(e){
    this.setState({
      name: e.target.value
    })
  }
  
}

export default App;
