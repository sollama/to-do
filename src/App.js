import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Filter from "./components/Filter";
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import "./App.css";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [Filters, setFilters] = useState({ filters: [] });

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // function filterPending() {
  //   console.log("wee");
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.completed == true) {
  //         return {
  //           ...todo,
  //         };
  //       }
  //       return todo;
  //     })
  //   );
  // }

  function showFilteredResults(filters) {
    console.log(filters);
  }

  function handleFilters(filters, category) {
    const newFilters = { ...Filters };

    newFilters[category] = filters;
    console.log(newFilters);
    console.log(filters);
    //showFilteredResults(newFilters)
    setFilters(newFilters);

    //show pending
    if (filters === 1)
      setTodos(
        todos.map((todo) => {
          if (todo.completed == false) {
            return todo;
          }
        })
      );

    //show complete
    if (filters === 2) console.log(filters);
    //show all
    if (filters === 3) console.log(filters);
  }

  return (
    <div>
      <Router>
        <Nav />
        <Header />

        <div className="App">
          <div>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Filter
                    handleFilters={(filters) =>
                      handleFilters(filters, "filters")
                    }
                  />
                  <div className="list">
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                      todos={todos}
                      removeTodo={removeTodo}
                      toggleComplete={toggleComplete}
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    </div>
  );
}

const line = {
  color: "#1b1f31",
};

export default App;
