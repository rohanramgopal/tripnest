import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrip, updateTrip } from "../redux/tripSlice.jsx";
import { Link } from "react-router-dom";

export default function Trips() {
  const trips = useSelector((state) => state.trips);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editDate, setEditDate] = useState("");

  function startEdit(trip) {
    setEditId(trip.id);
    setEditDate(trip.date);
  }

  function saveEdit(trip) {
    if (!editDate) {
      return;
    }

    dispatch(updateTrip({ ...trip, date: editDate }));
    setEditId(null);
  }

  return (
    <main className="container page-section">
      <div className="page-heading">
        <p className="eyebrow">YOUR PERSONAL ITINERARY</p>
        <h1>My Trips</h1>
        <p>Your saved travel plans, all in one place.</p>
      </div>

      <div className="trips-toolbar">
        <p>
          <strong>{trips.length}</strong>{" "}
          {trips.length === 1 ? "trip" : "trips"} saved
        </p>
        <Link to="/explore" className="button button-primary">
          + Plan a trip
        </Link>
      </div>

      {trips.length === 0 ? (
        <div className="empty-trips">
          <h2>Your next story starts somewhere.</h2>
          <p>You haven't saved any trips yet.</p>
          <Link to="/explore" className="button button-primary">
            Explore destinations
          </Link>
        </div>
      ) : (
        <div className="trip-list">
          {trips.map((trip) => (
            <article className="trip-row" key={trip.id}>
              <div className="trip-main">
                <h3>{trip.destination}</h3>
                <p>{trip.name} · {trip.people} traveller(s)</p>
                <p>Contact: {trip.email}</p>

                {editId === trip.id ? (
                  <div className="edit-date">
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                    />

                    <button
                      className="small-button"
                      onClick={() => saveEdit(trip)}
                    >
                      Save date
                    </button>

                    <button
                      className="small-button"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <p>Departure: {trip.date}</p>
                )}
              </div>

              <div className="trip-price">
                <span>ESTIMATED TOTAL</span>
                <strong>${trip.price}</strong>
                <span>{trip.status}</span>
              </div>

              <div className="trip-actions">
                {editId !== trip.id && (
                  <button
                    className="small-button"
                    onClick={() => startEdit(trip)}
                  >
                    Edit date
                  </button>
                )}

                <button
                  className="small-button delete-action"
                  onClick={() => dispatch(deleteTrip(trip.id))}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="demo-note">
        Demo only: trips are stored in Redux memory and reset when the page
        is refreshed. No real booking or payment is processed.
      </p>
    </main>
  );
}