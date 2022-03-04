import React from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import fileDownload from "js-file-download";
import resumeImg from "../resume-screenshot.png"

const Resume = () => {
  const download = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, "JordanStottsResume.pdf");
    });
  };

  return (
    <div className="resume-page">
      <Home />
      <p className="resume-text">Feel free to download my resmue and reach out to me with any questions!</p>
      <img  className="resume-img" src={resumeImg} alt="resume" />
      <div>
        <button className="download-btn" onClick={(e) => download(e)}>Download Resume</button>
      </div>
    </div>
  );
};

export default Resume;
