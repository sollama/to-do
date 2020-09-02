import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

App.use((err, req, res, next) => {
  res.status(500).json({ type: "error", message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

ReactDOM.render(<App />, document.getElementById("root"));
