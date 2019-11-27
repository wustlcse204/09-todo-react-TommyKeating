import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Page">
        <h1>Tommy Keating's ToDo App</h1>
        <div class = "centerpage">
          <div class = "todoform">
            <div class = "addform">
            <form onsubmit="return false">
              <h2>Create ToDo Item Form</h2>
              <input type = "text" id = "name"></input><br /><br />
              <button class = "createB" id = "addButton">Create</button>
            </form>
            </div>
          </div>
          <div class = "todolist">
            <div class = "ltitle"><h2>ToDo List</h2></div>
            <div class = "listbody"><ul id = "ListOfToDos"></ul></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
