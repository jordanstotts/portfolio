import React from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import resumeImg from "../resume-screenshot.png";
import resume from "../Jordan Stotts Resume.pdf";

const Resume = () => {
  return (
    <div className="resume-page">
      <Home />
      <h1 className="resume-head">Download my resume here!</h1>
      <div className="hline1"></div>
      <div className="hline2"></div>
      <div className="hline1"></div>
      <img className="resume-img" src={resumeImg} alt="resume" />
      <div>
        <button className="download-btn">
          <a
            className="download-btn-link"
            href={resume}
            download
            rel="noopener noreferrer"
            target="_blank"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
