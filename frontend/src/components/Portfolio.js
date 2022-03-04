import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Home />
      <h1 className="portfolio-head">Past Projects</h1>
      <div>
          links, screenshots, and short descirption of projects here
      </div>
    </div>
  );
};

export default Portfolio;
