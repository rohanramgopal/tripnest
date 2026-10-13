import React from "react";

export default function About() {
  return (
    <main className="container page-section">
      <div className="page-heading">
        <p className="eyebrow">OUR STORY</p>
        <h1>Travel should feel personal.</h1>
        <p>
          TripNest is a travel discovery concept built to make exploring
          destinations simple and enjoyable.
        </p>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h2>Discover</h2>
          <p>Explore beaches, mountains and cities around the world.</p>
        </article>

        <article className="info-card">
          <h2>Plan</h2>
          <p>Choose a destination and save your travel details.</p>
        </article>

        <article className="info-card">
          <h2>Remember</h2>
          <p>Keep your sample itinerary organised in one place.</p>
        </article>
      </div>
    </main>
  );
}