import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [place, setPlace] = useState("");
  const page = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    page(`/explore?search=${encodeURIComponent(place)}`);
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <label>
        <span>Where to?</span>
        <input
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Search destinations"
        />
      </label>

      <button className="button button-primary" type="submit">
        Find a trip
      </button>
    </form>
  );
}