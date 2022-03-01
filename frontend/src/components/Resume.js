import React from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import fileDownload from "js-file-download";

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
    <div>
      <Home />
      <p>Here is a link to download my updated resume!</p>
      <div>
        <button onClick={(e) => download(e)}>Download Resume</button>
      </div>
    </div>
  );
};

export default Resume;
