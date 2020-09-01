import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form
      className="todo-form"
      style={{ display: "flex", padding: "5px", border: "1px black" }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Add a Task..."
        type="text"
        name="task"
        style={{ flex: "10" }}
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button style={submitBtn} type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

const submitBtn = {
  display: "inline-block",
  border: "none",
  background: "#1b1f31",
  color: "#fff",
  padding: "0px 20px",
  cursor: "pointer",
  borderRadius: "10%",
  "&:hover": {
    background: "#2c2f46",
  },
};

export default TodoForm;
