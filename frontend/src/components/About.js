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
        I'm a recent grad of General Assemlby's full-time immersive software
        engineering bootcamp, which covered frontend and backend web
        development. My previous career as a professional basketball player
        overseas has provided me insight into my next career move: building and
        maintaining sports betting/sports centered websites that have a great
        user experience. In this next phase of my career, I seek a role as a web
        developer at a company where I can work on solving problems that help
        make websites function more efficiently for everyone involved as well as
        learn, grow, and continue to master my craft.
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
        <p>(515)-401-2874</p>
        <p>jordanstotts22@gmail.com</p>
        <p>www.jordanstotts.com</p>
        <p>October 29th, 1993</p>
        <p>Des Moines, IA (open to remote/relocation)</p>
        <p>ACTIVELY LOOKING</p>
      </div>
      <div>
        <h1>My Interests</h1>
        <div>
          <p>Sports</p>
        </div>
        <div>
          <p>Travel</p>
        </div>
        <div>
          <p>Movies</p>
        </div>
        <div>
          <p>Concerts</p>
        </div>
        <div>
          <p>Games</p>
        </div>
        <div>
          <p>Code</p>
        </div>
        <div>
          <p>Podcasts</p>
        </div>
        <div>
          <p>Exercise</p>
        </div>
      </div>
    </div>
  );
};

export default About;
