import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const Contact = () => {
  return (
    <div className="contact-page">
      <Home />
      <h1 className="contact-head">Feel free to reach out to me!</h1>
      <div className="contacts">
        <p>Phone: (515)-401-2874</p>
        <p>Email: jordanstotts22@gmail.com</p>
        {/* <p>
          <a href="https://www.linkedin.com/in/jordanstotts/">
            <img className="contact-socials" src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1646165667~hmac=31c3e2d8924eb72b0687118c1b56c5da" />{" "}
          </a>
        </p>
        <p>
          <a href="https://twitter.com/jordan_stotts22">
            <img className="contact-socials" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/jordan.stotts">
            <img className="contact-socials" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Contact;
