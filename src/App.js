import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.changeTitle = this.changeTitle.bind(this);
    
    this.state = {
      title: "El titulo papá"
    }
  }
  
  changeTitle(){
    this.setState({
      title: "A very cool title"
    });
  }
  
  render() {
    return (
        <div>
          <h1>Hey {this.state.title} </h1>
          <button onClick={this.changeTitle}>Cambiar Tit</button>
        </div>
    );
  }
  
  
}

export default App;
