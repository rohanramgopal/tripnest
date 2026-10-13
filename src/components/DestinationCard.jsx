import React from "react";
import { Link } from "react-router-dom";

export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <Link
        to={`/destination/${destination.id}`}
        className="card-image-link"
      >
        <img
          src={destination.image}
          alt={destination.name}
          className="card-image"
        />
        <span className="category-tag">
          {destination.category}
        </span>
      </Link>

      <div className="card-body">
        <div className="card-location">
          {destination.location}
          <span>★ {destination.rating}</span>
        </div>

        <h3>
          <Link to={`/destination/${destination.id}`}>
            {destination.name}
          </Link>
        </h3>

        <div className="card-bottom">
          <span>{destination.days}</span>
          <span>
            From <strong>${destination.price}</strong>
          </span>
        </div>
      </div>
    </article>
  );
}