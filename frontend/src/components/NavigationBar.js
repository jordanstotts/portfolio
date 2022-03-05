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
            <NavLink id="links" active href="/">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink id="links" href="/about">
              About
            </NavLink>
          </div>
          <div>
            <NavLink id="links" href="/skills">
              Skills
            </NavLink>
          </div>
          <div>
            <NavLink id="links" href="/portfolio">
              Portfolio
            </NavLink>
          </div>
          <div>
            <NavLink id="links" href="/resume">
              Resume
            </NavLink>
          </div>
          <div>
            <NavLink id="links" href="/contact">
              Contact
            </NavLink>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default NavigationBar;
