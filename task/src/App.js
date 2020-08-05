import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';


class App extends Component {
  constructor() {
   super();
   this.state = {
     todos
   }
 }
  render() {
     const todos = this.state.todos.map((todo, i) => {
       return (
         <div className="col-md-4">
            <div className="card mt-1">
            <div className ="card-header">
              <h5 class="card-title">{todo.title}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">{todo.description}</p>
            </div>
              </div>
            </div>
      )
     });

  return (
    <div className="App">
      <nav className = "navbar navbar-dark bg-dark">
        <a href="" className="text-white">Task</a>
      </nav>
        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
}

export default App;
