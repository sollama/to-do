import React from "react";

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
  background: "#eff0f6",
};
export default Header;
