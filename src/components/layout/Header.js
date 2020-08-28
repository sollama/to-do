import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={headerStyle}>
      <h1>TO DO</h1>
      <h3>
        <i>a list for you</i>{" "}
      </h3>
    </div>
  );
}

const headerStyle = {
  color: "#2c2f46",
  padding: "10%",
  textAlign: "center",
};
export default Header;
