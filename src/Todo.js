import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props)
    // stuff here
    this.state = {
      todos: []
    }
  }


  render() {
    var className = "todo";
    if (this.props.completed) {
      className = "tcomp";
    }
    return (
      <li>
        <div id={this.props.id} className={className}>
          <p>{this.props.text}</p>
          <button className="complete" id={this.props.id} onClick={this.props.mComp}>Mark Completed</button>
          <button className="delete" id={this.props.id} onClick={this.props.deleteTo}>Delete</button>
        </div>
      </li>
    );
  }
}

export default Todo;
