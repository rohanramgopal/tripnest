import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, setMode } = useContext(ThemeContext);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={closeMenu}>
          ✳ tripnest
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/explore" onClick={closeMenu}>Explore</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/trips" onClick={closeMenu}>My Trips</NavLink>
          <NavLink to="/profile" onClick={closeMenu}>Profile</NavLink>

          <button
            className="theme-button"
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
          >
            {mode === "light" ? "☾ Dark" : "☀ Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}