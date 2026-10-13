import React from "react";
import destinations from "../data/destinations.js";
import DestinationCard from "../components/DestinationCard.jsx";

export default function Mountains() {
  const mountainDestinations = destinations.filter(
    (destination) => destination.category === "Mountains"
  );

  return (
    <section>
      <h2>Mountain escapes</h2>

      <div className="destination-grid">
        {mountainDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
}