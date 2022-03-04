import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const Portfolio = () => {
  return (
    <div>
      <Home />
      <p className="portfolio-head">Projects I've worked on in the past</p>
      <div>
          links, screenshots, and short descirption of projects here
      </div>
    </div>
  );
};

export default Portfolio;
