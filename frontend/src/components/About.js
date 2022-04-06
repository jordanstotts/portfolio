import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const About = () => {
  return (
    <div className="about-page">
      <Home />
      <div>
        <h1 className="about-head">About Me</h1>
        {/* <div className="hline1"></div> */}
        <div className="hline1"></div>
        <div className="hline2"></div>
        <div className="hline1"></div>
      </div>
      <p className="about-caption">
        <div className="hello">Hello! I'm Jordan.</div>
        I'm a recent grad of General Assembly's full-time immersive software
        engineering bootcamp, which covered frontend and backend web
        development. After my previous career as an overseas professional
        basketball player ended I began looking for a new passion off the court.
        I have found that passion in building and maintaining well designed
        websites that have a great user experience written with clean and
        reusable code. In this next phase of my career, I seek a role as a
        frontend web developer at a company where I can work on solving problems
        that help make websites function more efficiently for everyone involved
        as well as learn, grow, and continue to master my craft.
      </p>
      <div className="details-interests">
        <div className="personal-dets-layout">
          <h2>Personal Details</h2>
          <div className="personal-dets-content">
            <div>
              <p>Phone</p>
              <p>Email</p>
              <p>Education</p>
              <p>Degree</p>
              <p>Location</p>
              <p>Job Status</p>
            </div>
            <div className="personal-info">
              <p>(515)-401-2874</p>
              <p>jordanstotts22@gmail.com</p>
              <p>University of Sioux Falls / General Assembly</p>
              <p>Sports Management with Minor in Entrepreneurial Studies</p>
              <p>Des Moines, IA (open to remote/relocation)</p>
              <p className="job-status"> ACTIVELY LOOKING </p>
            </div>
          </div>
        </div>
        <div className="interests-layout">
          <h2>My Interests</h2>
          <div className="interests-content">
            <div className="interest-card">
              <img
                className="interest"
                src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/344/external-basketball-hobbies-and-interest-smashingstocks-mixed-smashing-stocks.png"
                alt="sports"
              />
              <p className="interest-name">Sports</p>
            </div>
            <div className="interest-card">
              <img
                className="interest"
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/344/external-airplane-camping-kiranshastry-solid-kiranshastry.png"
                alt="travel"
              />
              <p className="interest-name">Travel</p>
            </div>
            <div className="interest-card">
              <img
                className="interest"
                src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/344/external-video-camera-retro-icongeek26-glyph-icongeek26.png"
                alt="movies"
              />
              <p className="interest-name">Movies</p>
            </div>
            <div className="interest-card">
              <img
                className="interest"
                src="https://img.icons8.com/ios-filled/344/musical-notes.png"
                alt="concerts"
              />
              <p className="interest-name">Concerts</p>
            </div>
            <div className="interest-card">
              <img
                className="interest"
                src="https://img.icons8.com/ios-filled/344/controller.png"
                alt="games"
              />
              <p className="interest-name">Games</p>
            </div>
            <div className="interest-card">
              <img
                className="interest"
                src="https://img.icons8.com/ios-filled/344/code.png"
                alt="code"
              />
              <p className="interest-name">Code</p>
            </div>
            <div className="interest-card">
              <img
                className="interest"
                src="https://img.icons8.com/ios-filled/344/microphone--v1.png"
                alt="podcasts"
              />
              <p className="interest-name">Podcasts</p>
            </div>
            <div className="interest-card">
              <img
                className="interest"
                src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/344/external-dumbbell-sports-and-awards-smashingstocks-glyph-smashing-stocks.png"
                alt="exercise"
              />
              <p className="interest-name">Exercise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
