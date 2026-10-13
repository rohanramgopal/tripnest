import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Profile() {
  const { mode, setMode } = useContext(ThemeContext);
  const [name, setName] = useState("TripNest Traveller");

  return (
    <main className="container page-section">
      <div className="page-heading">
        <p className="eyebrow">YOUR SPACE</p>
        <h1>Profile</h1>
        <p>Manage your demo profile and appearance settings.</p>
      </div>

      <section className="profile-card">
        <div className="profile-avatar">T</div>

        <label>
          Display name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <p>Hello, {name || "Traveller"}!</p>

        <div className="profile-setting">
          <span>Appearance: {mode} mode</span>

          <button
            className="button button-primary"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            Switch to {mode === "light" ? "dark" : "light"} mode
          </button>
        </div>
      </section>
    </main>
  );
}