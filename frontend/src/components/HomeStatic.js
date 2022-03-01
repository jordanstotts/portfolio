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
        <div>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default HomeStatic;
