import "./Navbar.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/LogoSVG.svg";
import { TbMenuDeep } from "react-icons/tb";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="login-register">
        <div className="menu" onClick={toggleMenu}>
          <TbMenuDeep />
        </div>
        <button className="login" onClick={() => navigate("/login")}>
          Sign In
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
        <div className="mobile-menu-content">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </div>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" onClick={toggleMenu}>
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" onClick={toggleMenu}>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="login-register-menu">
            <button className="login" onClick={() => navigate("/login")}>
              Sign In
            </button>
            <button className="register" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
