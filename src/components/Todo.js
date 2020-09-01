import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={lineItem}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          flex: "10",
        }}
      >
        {todo.task}
      </Typography>
      <IconButton style={deleteBtn} onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

const lineItem = {
  backgroundColor: "#f4f4f4",
  padding: "5px 10px",
  borderBottom: "1px #ccc dotted",
  display: "flex",
};

const deleteBtn = {
  cursor: "pointer",
  float: "right",
  marginLeft: "10px",
  padding: "7px",
  border: "none",
};

export default Todo;
