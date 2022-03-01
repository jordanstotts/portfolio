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
            <NavLink active href="#">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink href="#">About</NavLink>
          </div>
          <div>
            <NavLink href="#">Skills</NavLink>
          </div>
          <div>
            <NavLink href="#">Resume</NavLink>
          </div>
          <div>
            <NavLink href="#">Portfolio</NavLink>
          </div>
          <div>
            <NavLink href="#">Contact</NavLink>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default NavigationBar;
