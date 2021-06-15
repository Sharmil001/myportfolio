import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { openMenu, closeMenu } from "../animations";
import { ReactComponent as Logo } from "../assets/images/logo-full.svg";

const Header = ({ history }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }

    history.listen(() => {
      setMenuOpen(false);
    });
  }, [menuOpen, history]);

  const menuToggle = () => {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 1500);
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header">
      <div className={`logo header-item`}>
        <Link to="/">
          {/* changed */}
          <h2 id = "logo">Sharmil<span className="dev">.dev</span></h2>
        </Link>
      </div>
      <div
        onClick={menuToggle}
        className={`hamburger${menuOpen ? "__active" : ""} ${
          disabled ? "ham-disabled" : ""
        } header-item`}
      >
        <div className="hamburger-icon"></div>
      </div>
    </div>
  );
};

export default withRouter(Header);
