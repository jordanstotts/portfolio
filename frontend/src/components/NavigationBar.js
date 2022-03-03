import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <div className="nav-layout">
      <h1 className="nav-myname">Jordan</h1>
      <div className="nav-links">
        <Nav>
          <div>
            <NavLink active href="/">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink href="/about">About</NavLink>
          </div>
          <div>
            <NavLink href="/skills">Skills</NavLink>
          </div>
          <div>
            <NavLink href="/portfolio">Portfolio</NavLink>
          </div>
          <div>
            <NavLink href="/resume">Resume</NavLink>
          </div>
          <div>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default NavigationBar;
