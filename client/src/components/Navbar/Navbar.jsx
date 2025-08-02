import "./Navbar.css";
import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/images/logo/LogoSVG.svg";
import { TbMenuDeep } from "react-icons/tb";

function Navbar() {
  const { user, handleLogout } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // User state'i değiştiğinde isLoggedIn'i güncelle
  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50); // 10rem = 100px (10 * 10px)
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
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
        {isLoggedIn ? (
          <>
            <p className="welcome-message"><span>Welcome</span>, {user?.first_name}!</p>
            <button
              className="logout"
              onClick={async () => {
                await handleLogout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button className="login" onClick={() => navigate("/login")}>
            Sign In
          </button>
        )}
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
            {isLoggedIn ? (
              <>
                <p className="welcome-message"><span>Welcome</span>, {user?.first_name}!</p>
                <button
                  className="logout"
                  onClick={async () => {
                    await handleLogout();
                    toggleMenu();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="login"
                  onClick={() => {
                    toggleMenu();
                    navigate("/login");
                  }}
                >
                  Sign In
                </button>
                <button
                  className="register"
                  onClick={() => {
                    toggleMenu();
                    navigate("/register");
                  }}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
