import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "default",
      terms: false
    }
  }
  
  render() {
    return (
        <div>
          <h1>Hey</h1>
          <input type="text" value={this.state.name} onChange={this.updateName.bind(this)}/>
          <div>
            <label>
              <input type="checkbox" checked={this.state.terms} onClick={this.updateTerms.bind(this)}/> Accept
            </label>
          </div>
          <button onClick={this.sayHi.bind(this)}>Hi!</button>
        </div>
    );
  }
  
  sayHi(){
    console.log("Hi!!", this.state.name, this.state.terms);
  }
  
  updateName(e){
    this.setState({
      name: e.target.value
    })
  }
  
  updateTerms(e){
    this.setState({
      terms: e.target.checked
    })
  }
}

export default App;
