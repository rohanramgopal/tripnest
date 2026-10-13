import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export default function Explore() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <main className="container page-section">
      <div className="page-heading">
        <p className="eyebrow">THE WORLD IS WAITING</p>
        <h1>Explore destinations</h1>
        <p>Find a destination that fits your travel style.</p>
      </div>

      {search && (
        <p className="search-notice">
          Searching for: <strong>{search}</strong>
        </p>
      )}

      <div className="category-tabs">
        <NavLink to="/explore" end>All destinations</NavLink>
        <NavLink to="/explore/beaches">Beaches</NavLink>
        <NavLink to="/explore/mountains">Mountains</NavLink>
        <NavLink to="/explore/cities">Cities</NavLink>
      </div>

      <Outlet />
    </main>
  );
}