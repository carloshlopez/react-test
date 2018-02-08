import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: ['task1', 'task2']
    }
  }
  
  addTask(){
    this.setState({
      tasks: this.state.tasks.concat('task3')
    });
  }
  
  changeTask(){
    const index = this.state.tasks.findIndex(task => task === "task2");
    // this.setState({
    //   tasks: this.state.tasks.map((task, i) =>
    //     i === index ? "actualizado" : task
    //   )
    // });
    const tasks = this.state.tasks;
    this.setState({
      tasks: [
        ...tasks.slice(0,index),
        "Actualizastes",
        ...tasks.slice(index + 1)
        ]
    })
  }
  
  render() {
    return (
        <div>
        <h1>HeY</h1>
        <p>These are the tasks</p>
        <ul>
        {
          this.state.tasks.map(task =>
            <li>{task}</li>
          )
        }
        </ul>
        <button onClick={this.addTask.bind(this)}>Add Task</button>
        <button onClick={this.changeTask.bind(this)}>changeTask2</button>
        <input type="text" name="numTask"></input>
        </div>
    );
  }
}

export default App;
 