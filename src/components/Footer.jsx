import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="brand">
          ✳ tripnest
        </Link>

        <p>Make room for somewhere new.</p>
        <span>© 2026 TripNest · React training project</span>
      </div>
    </footer>
  );
}