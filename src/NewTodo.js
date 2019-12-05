import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  constructor(props) {
    super(props)
    // stuff here
    this.state = {
      todos: [],
      somethingElse: ''
    }
  }

  render() {
    return (
      <form type = "submit" onSubmit={this.props.addTodo}>
        <h2>Create ToDo Item Form</h2>
        <input type = "text" value={this.props.input} onChange={this.props.onChange} /><br /><br />
        <button className = "createB" id = "addButton">Create</button>
      </form>
    );
  }
}

export default NewTodo;
