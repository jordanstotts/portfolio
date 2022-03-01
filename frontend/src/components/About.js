import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const About = () => {
  return (
    <div>
      <Home />
      <div>
        <h1>About Me</h1>
      </div>
      <p>
        <p>Hello! I'm Jordan</p>
        I'm currently a student in a software engineering bootcamp working on
        skills in front-end and back-end web development. My previous career as
        a professional basketball player overseas has provided me insight into
        my next career move: building and maintaining sports betting/sports
        centered websites that have a great user experience. In this next phase
        of my career, I seek a role as a web developer at a company where I can
        work on solving problems that help make websites function more
        efficiently for everyone involved as well as learn, grow, and continue
        to master my craft.
      </p>
      <div>
        <h2>Personal Details</h2>
        <p>Phone</p>
        <p>Email</p>
        <p>Website</p>
        <p>Birthday</p>
        <p>Location</p>
        <p>Job Status</p>
      </div>
      <div>
        <h1>My Interests</h1>
        <p>Sports</p>
        <p>Travel</p>
        <p>Movies</p>
        <p>Concerts</p>
        <p>Games</p>
        <p>Code</p>
        <p>Podcasts</p>
        <p>Exercise</p>
      </div>
    </div>
  );
};

export default About;
