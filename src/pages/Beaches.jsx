import React from "react";
import destinations from "../data/destinations.js";
import DestinationCard from "../components/DestinationCard.jsx";
import { useSearchParams } from "react-router-dom";

export default function Beaches() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const beachDestinations = destinations.filter((destination) => {
    return (
      destination.category === "Beaches" &&
      destination.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section>
      <h2>Beach escapes</h2>

      {beachDestinations.length === 0 ? (
        <p>No beach destinations matched your search.</p>
      ) : (
        <div className="destination-grid">
          {beachDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      )}
    </section>
  );
}