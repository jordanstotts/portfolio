import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import sharpPayouts from "../sharp-payout-screenshot.png";
import theFlag from "../theflag_logo.png";
import travelWatcher from "../travel-watcher-screenshot.png";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Home />
      <h1 className="portfolio-head">Past Projects</h1>
      <div className="hline1"></div>
      <div className="hline2"></div>
      <div className="hline1"></div>
      <div className="project-list">
        <div className="flag-card">
          <h3 className="project-name">The Flag Tournament</h3>
          <a href="https://theflagtournament.herokuapp.com/">
            <img className="project-pics" src={theFlag} alt="flag toruney" />
          </a>
          <p className="portfolio-caption">
            The Annual "Where's My Ball" Tournament was created by my friends
            and I back in the summer of 2013. We came up with the idea of having
            a traveling trophy go to the loser of an annual golf tournament.
            Thus the pink, I SUCK AT GOLF, flag was born. The flag is presented
            each year to the person with the worst score after 18 holes of golf.
            The flag is then flown with pride for one year for all the world to
            see. This website was created as a way for us to keep track of past
            winners and losers as well as other flag tourney memories throughout
            the years.
            <br />
            <br />
          </p>
        </div>
        <div className="sharp-card">
          <h3 className="project-name">Sharp Payouts</h3>
          <a href="https://sharppayouts.herokuapp.com/">
            <img
              className="project-pics"
              src={sharpPayouts}
              alt="sharp payouts"
            />
          </a>
          <p className="portfolio-caption">
            Sharp Payouts is a sports betting informational app that allows you
            to see odds and prices from the four major US sports leagues. When
            you click on a logo on the landing page it will show you every game
            for the current day with odds and pricing for the spread, moneyline,
            and total. Sharp Payouts was created to help bring together sports
            betting information in one easy to use location.{" "}
          </p>
        </div>

        <div className="travelwatcher-card">
          <h3 className="project-name">Travel Watcher</h3>
          <a href="https://travelwatcherapp.herokuapp.com/">
            <img
              className="project-pics"
              src={travelWatcher}
              alt="travel watcher"
            />
          </a>
          <p className="portfolio-caption">
            Travel Watcher keeps track of your budget while on a trip and was a
            group project created while at General Assemlby. It has a fully
            functional frontend and backend written in Mongo, Express, React,
            and Node. The app allows users to create an account and keep a
            database of all the past trips they've been on. Travel Watcher is
            also great for trips you are currently on as there is a running
            total that updates in real time as you add or delete expenses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
