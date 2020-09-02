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
const [PENDING, COMPLETED, ALL] = [1, 2, 3];

function App() {
  const [todos, setTodos] = useState([]);
  const [filterLevel, setFilterLevel] = useState(ALL);

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

  const visibleTodos = todos.filter((todo) => {
    if (filterLevel === ALL) return true;
    if (filterLevel === PENDING) return !todo.completed;
    if (filterLevel === COMPLETED) return todo.completed;
  });

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
                    handleFilters={(newFilterLevel) =>
                      setFilterLevel(newFilterLevel)
                    }
                    color={filterLevel}
                  />
                  <div className="list">
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                      todos={visibleTodos}
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

export default App;
