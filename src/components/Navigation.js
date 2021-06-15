import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="hamburger-menu">
      <div className="nav-primary">
        <div className="nav-content">
          <div className="nav-title">Menu</div>
          <div className="nav-links">
            <div data-text="Home" className="nav-link">
              <NavLink exact activeClassName="active-link" to="/">
                Home
              </NavLink>
            </div>
            <div data-text="About Me" className="nav-link">
              <NavLink activeClassName="active-link" to="/about">
                About me
              </NavLink>
            </div>
            <div data-text="Contact" className="nav-link">
              <NavLink activeClassName="active-link" to="/contact">
                Contact
              </NavLink>
            </div>

            <div data-text="GitHub" className="nav-link">
              <a
                href="https://github.com/Sharmil001"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>

            <div data-text="Linkedin" className="nav-link">
              <a
                href="https://www.linkedin.com/in/sharmil-ml/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>

            {/* <div data-text="Blog" className="nav-link">
              <a
                href="https://dev.to/oluwadareseyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div> */}
          </div>
        </div>
        <div className="hover-bg"></div>
      </div>
      <div className="nav-secondary"></div>
    </div>
  );
};

export default Navigation;
