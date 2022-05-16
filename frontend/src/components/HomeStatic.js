import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import headShot from "../headshot.jpg";


const HomeStatic = () => {
  return (
    <div className="home-static">
      <img
        className="profile-pic"
        alt="profile pic"
        src={headShot}
      />
      <div>
        <div className="name-title">
          <h1>Jordan Stotts</h1>
          <p>Frontend Software Engineer</p>
        </div>
        <div className="home-socials-layout">
          <p>
            <a href="https://www.linkedin.com/in/jordanstotts/">
              <img
                className="home-socials"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
              />{" "}
            </a>
          </p>
          <p>
            <a href="https://twitter.com/jordan_stotts22">
              <img
                className="home-socials"
                src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              />
            </a>
          </p>
          <p>
            <a href="https://github.com/jordanstotts">
              <img
                className="home-socials"
                src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-4.jpg"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeStatic;
