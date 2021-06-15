import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <hr />
      <div className="footer-top">
        <div className="message">Say Hello</div>
        <div className="links">
          <div className="link">
            <p>
              <a
                data-text="wa.me/sharmiladroja"
                href="https://wa.me/+918805929891"
                target="_blank"
                rel="noopener noreferrer"
              >
                wa.me/sharmiladroja
              </a>
            </p>
            <p>
              <a
                data-text="sharmiladroja17@gamil.com"
                href="mailto:sharmiladroja17@gamil.com"
              >
                sharmiladroja17@gamil.com
              </a>
            </p>
          </div>
          <div className="link">

            <p>
              <Link data-text="Resume" to="/about">
                Resume
              </Link>
            </p>

            <p>
              <Link data-text="Contact" to="/contact">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© Sharmil Adroja 2021</div>
    </footer>
  );
};

export default Footer;
