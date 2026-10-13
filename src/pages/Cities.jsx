import React from "react";
import destinations from "../data/destinations.js";
import DestinationCard from "../components/DestinationCard.jsx";

export default function Cities() {
  const cityDestinations = destinations.filter(
    (destination) => destination.category === "Cities"
  );

  return (
    <section>
      <h2>City discoveries</h2>

      <div className="destination-grid">
        {cityDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
}