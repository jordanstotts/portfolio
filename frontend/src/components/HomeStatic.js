import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const HomeStatic = () => {
  return (
    <div className="home-static">
      <img
        className="profile-pic"
        alt="profile pic"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFbfLziM78xIQ/profile-displayphoto-shrink_800_800/0/1599148063231?e=1651708800&v=beta&t=kFke5ftXqjK0DNl2NiSifaM6fo-4H2lvFqCMXA5kU78"
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
