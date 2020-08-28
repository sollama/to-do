import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((res) => this.setState({ todos: res.data }));
  }

  // checkBtn = (id) => {
  //   this.setState({
  //     todos: this.state.todos.map((todo) => {
  //       if (todo.id === id) {
  //         console.log(id);
  //         console.log(this.state.);
  //         //document.getElementById("checkBox").value = { FaCheckCircle };
  //       }
  //       return todo;
  //     }),
  //   });
  // };

  //Toggle complete
  //markComplete here bc we need to set state in this function and we don't have redux
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  deleteTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    );
  };

  // mimics a real life backend. doesn't actually save to the server, but makes POST request and gets a response
  //Add Todo
  addTodo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div>
            <Nav />
            <Header />
            {<hr style={line} />}
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Filter />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                    checkBtn={this.checkBtn}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

const line = {
  color: "#1b1f31",
};

export default App;
