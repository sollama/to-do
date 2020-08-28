import React, { Component } from "react";
import { FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    return (
      <div>
        <button>
          Filter <FaAngleRight />
        </button>
      </div>
    );
  }
}

export default Filter;
