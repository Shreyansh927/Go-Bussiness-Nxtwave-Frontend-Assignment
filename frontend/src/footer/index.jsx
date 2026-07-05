import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Go Business</h2>

        <ul className="footer-links">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
        </ul>

        <p className="footer-text">© 2024 Go Business, Inc.</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
