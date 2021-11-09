import React from "react";
import { BrowserRouter } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        width: "100%",
        textAlign: "center",
        height: "100vh",
        paddingTop: "10%",
      }}
    >
      <h1 style={{ color: "red" }}>404</h1>
      <br />
      <h2 style={{ color: "red" }}>Page not found.......................!</h2>
    </div>
  );
};

export default NotFound;
