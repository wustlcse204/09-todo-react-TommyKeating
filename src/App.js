import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  constructor() {
    super()
    // stuff here
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.sorter = this.sorter.bind(this);
    this.mComp = this.mComp.bind(this);
    this.deleteTo = this.deleteTo.bind(this);
  }



  componentDidMount() {
  let self = this;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var todos1 = JSON.parse(this.responseText);
        self.setState({todos: todos1});
        console.log(todos1);
    }
  };

  xhttp.open("GET", "https://cse204.work/todos", true);
  xhttp.setRequestHeader("x-api-key","2fbbcb-57aec6-e1ae6c-941610-845583");
  xhttp.send();


}

// In App.js
onChange(event) {
  // Set the state to the value of the input
  this.setState({
    input: event.target.value
  });
}

addTodo(event) {
  event.preventDefault();
  console.log("in");
  // read the input value from state
  const newTodoText = this.state.input;
  // Do AJAX
  // Inside your AJAX success
  let self = this;
// Setting variable for form input (get from HTML form)
var data = {
    text: newTodoText
}

// Initalize AJAX Request
var xhttp2 = new XMLHttpRequest();

// Response handler
xhttp2.onreadystatechange = function() {

    // Wait for readyState = 4 & 200 response
    if (this.readyState == 4 && this.status == 200) {

        // parse JSON response
        var todo = JSON.parse(this.responseText);

        console.log(todo);

        self.setState({
        todos: [...self.state.todos, JSON.parse(this.responseText)]
      })
      // clear the input field
      self.setState({input: ''});

    } else if (this.readyState == 4) {

        // this.status !== 200, error from server
        console.log(this.responseText);

    }
};

xhttp2.open("POST", "https://cse204.work/todos", true);

xhttp2.setRequestHeader("Content-type", "application/json");
xhttp2.setRequestHeader("x-api-key", "2fbbcb-57aec6-e1ae6c-941610-845583");
xhttp2.send(JSON.stringify(data));
self.setState({input: ''});
}

sorter()
{
  //event.preventDefault();
  const todo = this.state.todos;
  todo.sort(function (a, b) {
  return a.text.localeCompare(b.text);
  })
  this.setState({
    todos: todo
})
}

mComp(event)
{
  let self = this;
  var id = event.target.id;
  console.log(event.target.id);
      var data = {
        completed: true
      };
      // Initalize AJAX Request
      var xhttp2 = new XMLHttpRequest();

      // Response handler
      xhttp2.onreadystatechange = function() {

        // Wait for readyState = 4 & 200 response
        if (this.readyState == 4 && this.status == 200) {

          // parse JSON response
          var todo = JSON.parse(this.responseText);

          console.log(todo);

        } else if (this.readyState == 4) {

          // this.status !== 200, error from server
          console.log(this.responseText);

        }
      };

      xhttp2.open("PUT", "https://cse204.work/todos/"+id, true);
      xhttp2.setRequestHeader("Content-type", "application/json");
      xhttp2.setRequestHeader("x-api-key", "2fbbcb-57aec6-e1ae6c-941610-845583");
      xhttp2.send(JSON.stringify(data));
//////////////////////////////////////////////////////////////////////////////////
      var xhttp1 = new XMLHttpRequest();

      xhttp1.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var todos1 = JSON.parse(this.responseText);
            self.setState({todos: todos1});
            console.log(todos1);
        }
      };

      xhttp1.open("GET", "https://cse204.work/todos", true);
      xhttp1.setRequestHeader("x-api-key","2fbbcb-57aec6-e1ae6c-941610-845583");
      xhttp1.send();

      var xhttp2 = new XMLHttpRequest();

      xhttp2.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var todos1 = JSON.parse(this.responseText);
            self.setState({todos: todos1});
            console.log(todos1);
        }
      };

      xhttp2.open("GET", "https://cse204.work/todos", true);
      xhttp2.setRequestHeader("x-api-key","2fbbcb-57aec6-e1ae6c-941610-845583");
      xhttp2.send();

      var xhttp3 = new XMLHttpRequest();

      xhttp3.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var todos1 = JSON.parse(this.responseText);
            self.setState({todos: todos1});
            console.log(todos1);
        }
      };

      xhttp3.open("GET", "https://cse204.work/todos", true);
      xhttp3.setRequestHeader("x-api-key","2fbbcb-57aec6-e1ae6c-941610-845583");
      xhttp3.send();

      this.sorter();
}

deleteTo(event)
{
  console.log("In");
  let self = this;
  var id = event.target.id;
          // Initalize AJAX Request
          var xhttp2 = new XMLHttpRequest();

          // Response handler
          xhttp2.onreadystatechange = function() {

            // Wait for readyState = 4 & 200 response
            if (this.readyState == 4 && this.status == 200) {

              // parse JSON response
              var todo = JSON.parse(this.responseText);

              console.log(todo);

            } else if (this.readyState == 4) {

              // this.status !== 200, error from server
              console.log(this.responseText);

            }
          };
          xhttp2.open("DELETE", "https://cse204.work/todos/"+id, true);
          xhttp2.setRequestHeader("Content-type", "application/json");
          xhttp2.setRequestHeader("x-api-key", "2fbbcb-57aec6-e1ae6c-941610-845583");
          xhttp2.send();
          const remainingTodos = self.state.todos.filter((todo) => {
            // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
            if (todo.id !== id) {
              return todo;
            }
          });
          // Update state with filtered list using this.setState();
          self.setState({
            todos: remainingTodos
        })
        //this.sorter();
}

  render() {
    return (
      <body>
      <h1>Tommy's ToDo List</h1>
        <div className = "centerpage">
          <div className = "todoform">
            <div className = "addform">
              <NewTodo addTodo={this.addTodo} newTodo={this.newTodo} onChange={this.onChange} input={this.state.input} />
            </div>
          </div>
          <div className = "todolist">
            <div className = "ltitle"><h2>ToDo List</h2> <button className = "SortB" id = "sortButton" onClick = {this.sorter}>Sort</button> </div>
            <div className = "listbody"><ul id = "ListOfToDos">
              {this.state.todos.map((todo) =>
              <Todo key={todo.id} id={todo.id} completed={todo.completed}
              text={todo.text} removeDeletedTodo={this.removeDeletedTodo} mComp={this.mComp} deleteTo={this.deleteTo}/>)}
            </ul></div>
          </div>
        </div>
        </body>
    );
  }
}

export default App;
