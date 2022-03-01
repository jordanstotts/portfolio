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
        <h1>Jordan Stotts</h1>
        <p>Software Engineer</p>
        {/* <div>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>GitHub</p>
        </div> */}

        <div>
        <p>
          <a href="https://www.linkedin.com/in/jordanstotts/">
            <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1646165667~hmac=31c3e2d8924eb72b0687118c1b56c5da" />{" "}
          </a>
        </p>
        <p>
          <a href="https://twitter.com/jordan_stotts22">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
          </a>
        </p>
        <p>
          <a href="https://github.com/jordanstotts">
            <img src="https://png.pngitem.com/pimgs/s/128-1280162_github-logo-png-cat-transparent-png.png" />
          </a>
        </p>
      </div>

      </div>
    </div>
  );
};

export default HomeStatic;
