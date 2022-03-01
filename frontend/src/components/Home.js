import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";
import HomeStatic from "./HomeStatic";

const Home = () => {
  return (
    <div>
      <div>
        <NavigationBar />
        <HomeStatic />
      </div>
    </div>
  );
};

export default Home;
