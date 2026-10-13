import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import destinations from "../data/destinations.js";
import BookingForm from "../components/BookingForm.jsx";

export default function DestinationDetails() {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <main className="container page-section">
        <h1>Destination not found</h1>
        <Link to="/explore">Back to Explore</Link>
      </main>
    );
  }

  return (
    <main className="container detail-page">
      <Link to="/explore" className="back-link">
        ← Back to Explore
      </Link>

      <div className="detail-hero">
        <img src={destination.image} alt={destination.name} />
        <div className="detail-overlay">
          <span className="category-tag">{destination.category}</span>
          <h1>{destination.name}</h1>
          <p>{destination.location} · ★ {destination.rating}</p>
        </div>
      </div>

      <div className="detail-columns">
        <section className="detail-description">
          <p className="eyebrow">DISCOVER SOMETHING NEW</p>
          <h2>A place to remember.</h2>
          <p>{destination.description}</p>
          <p>Trip length: {destination.days}</p>
          <p>Starting price: ${destination.price} per person</p>
        </section>

        <aside className="booking-panel">
          {!showBooking ? (
            <>
              <h2>Make it a trip.</h2>
              <p>Save this destination to your trip list.</p>
              <button
                className="button button-primary"
                onClick={() => setShowBooking(true)}
              >
                Plan this trip
              </button>
            </>
          ) : (
            <BookingForm
              destination={destination}
              onClose={() => setShowBooking(false)}
            />
          )}
        </aside>
      </div>
    </main>
  );
}