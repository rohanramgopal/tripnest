import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations.js";
import DestinationCard from "../components/DestinationCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const searchSection = useRef(null);

  function goToSearch() {
    searchSection.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h1>Find a place<br />to <span>fall in love with.</span></h1>
          <p className="hero-description">
            Discover beautiful destinations and make room for new memories.
          </p>

          <div className="hero-actions">
            <button className="button button-primary" onClick={goToSearch}>
              Explore destinations
            </button>
            <Link to="/about" className="button button-light">
              Our story
            </Link>
          </div>

          <button
            className="text-button"
            onClick={() => setShowMessage(!showMessage)}
          >
            {showMessage ? "Hide travel tip" : "Show me a travel tip"}
          </button>

          {showMessage && (
            <p className="tip-message">
              Travel tip: Leave some time in your itinerary for unexpected discoveries!
            </p>
          )}
        </div>
      </section>

      <section className="section container" ref={searchSection}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">START EXPLORING</p>
            <h2>Where will you go?</h2>
          </div>
        </div>

        <SearchBar />

        <div className="destination-grid">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>

        <div className="center-button">
          <Link to="/explore" className="button button-primary">
            View all destinations
          </Link>
        </div>
      </section>

      <section className="feature-band">
        <div className="container feature-content">
          <p className="eyebrow">TRAVEL YOUR WAY</p>
          <h2>Small plans. Big memories.</h2>
          <p>Explore coastlines, mountain escapes and colourful cities.</p>
          <Link to="/explore" className="button button-light">
            Find your next trip
          </Link>
        </div>
      </section>
    </main>
  );
}