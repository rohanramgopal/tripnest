import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container page-section not-found">
      <p className="eyebrow">404 — WRONG TURN?</p>
      <h1>This destination doesn't exist.</h1>
      <p>Let's get you back to somewhere familiar.</p>

      <Link to="/" className="button button-primary">
        Back to Home
      </Link>
    </main>
  );
}