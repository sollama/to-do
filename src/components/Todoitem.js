import React, { Component } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

class Todoitem extends Component {
  getStyle = () => {
    //cross out if item is completed
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      color: this.props.todo.completed ? "#555" : "black",
    };
  };

  checkTest = (value) => {
    return console.log(value);
    //return console.log(document.getElementById("checkBox"));
  };

  render() {
    //destructuring
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          <button
            id="checkBox"
            style={checkBtn}
            onClick={() => this.checkTest(id)}
            className={FaRegCircle}
          >
            <FaRegCircle />
          </button>{" "}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={deleteBtn}
          >
            {" "}
            x
          </button>
        </p>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const checkBtn = {
  border: "none",
};

const deleteBtn = {
  background: "#ff0000",
  color: "#fff",
  cursor: "pointer",
  float: "right",
  padding: "5px 10px",
  borderRadius: "20%",
  border: "none",
};

export default Todoitem;
