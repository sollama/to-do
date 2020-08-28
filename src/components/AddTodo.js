import React, { Component } from "react";
import { FaPlus, FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  //setting title to whatever we type in
  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add a Task..."
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <button className="btn" type="submit">
          <FaPlus />
        </button>
      </form>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
