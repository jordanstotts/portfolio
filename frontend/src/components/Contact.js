import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const Contact = () => {
  return (
    <div>
      <Home />
      <p>Feel free to reach out to me!</p>
      <div>
          <p>Phone:</p>
          <p>Email:</p>
          <p>LinkedIn:</p>
          <p>Facebook:</p>
          <p>Twitter:</p>
      </div>
    </div>
  );
};

export default Contact;
