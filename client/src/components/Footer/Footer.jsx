import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo */}
          <div className="footer-logo">
            Scene By <span className="highlight">Scene</span>
          </div>

          {/* Navigation Links */}
          <ul className="footer-links">
            <li>
              <NavLink to="/" className="footer-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className="footer-link">
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="footer-link">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Social Media */}
          <div className="footer-social">
            <a
              href="https://twitter.com"
              className="social-icon"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>
              &copy; <span className="footer-year">{currentYear}</span>{" "}
              SceneByScene. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
