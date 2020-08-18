import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';
//sub componentes
import Form from './components/Form.js'

class App extends Component {
  constructor() {
   super();
   this.state = {
     todos
   }
    this.handleAddTodo = this.handleAddTodo.bind(this);
 }
 handleAddTodo(todo) {
   this.setState({
     todos: [...this.state.todos, todo]
   })
 }
 removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }
  render() {
     const todos = this.state.todos.map((todo, i) => {
       return (
         <div className="col-md-4">
            <div className="card mt-1">
            <div className ="card-header">
              <h5 class="card-title">{todo.title}</h5>
              <span class="badge badge-info"> {todo.priority}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{todo.description}</p>
              <p className="card-text">{todo.responsible}</p>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={this.removeTodo.bind(this, i)}>
                  Delete
                </button>
              </div>
            </div>
              </div>
            </div>
      )
     });

  return (
    <div className="App">
      <nav className = "navbar navbar-dark bg-dark">
        <a href="" className="text-white" >
          <svg width="30" height="30" viewBox="0 0 16 16" className="bi bi-bootstrap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12 1H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4z"/>
          <path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
          </svg>&nbsp;Task Aplication
          <span class="badge badge-dark ">Numbers task:
            <span className="badge badge-pill badge-light ml-2 ">{this.state.todos.length}</span>
          </span>
        </a>
      </nav>

      <div className="container">
        <div className="row mt-4">
          <div className="col col-md-8 col-sd-8 text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <Form onAddTodo={this.handleAddTodo}></Form>
          </div>
        </div>
      </div>

      <div className="container">
          <div className="row">
            {todos}
          </div>
      </div>
    </div>
  );
}
}

export default App;
