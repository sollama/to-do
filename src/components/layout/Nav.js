import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div style={navBar}>
      <Link style={linkStyle} to="/to-do">
        Home
      </Link>
      <Link style={linkStyle} to="/about">
        {" "}
        About
      </Link>
    </div>
  );
}

const navBar = {
  background: "#2c2f46",
  borderRadius: "1%",
  padding: "2%",
  textAlignment: "center",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  textTransform: "uppercase",
  padding: "0px 10px",
  fontWeight: "500",
};

export default Nav;
