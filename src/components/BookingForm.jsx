import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrip } from "../redux/tripSlice.jsx";

export default function BookingForm({ destination, onClose }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("2");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !date || !people) {
      setError("Please complete every field.");
      return;
    }

    dispatch(
      addTrip({
        id: Date.now(),
        destinationId: destination.id,
        destination: destination.name,
        name: name.trim(),
        email: email.trim(),
        date,
        people,
        price: destination.price * Number(people),
        status: "Saved"
      })
    );

    setError("");
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="booking-success">
        <h3>Your trip is saved!</h3>
        <p>
          Find it in My Trips. This demo does not process real bookings
          or payments.
        </p>
        <button className="button button-primary" onClick={onClose}>
          Done
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Plan your escape</h3>

      <p>Save {destination.name} to your trip list.</p>

      {error && <p className="form-error">{error}</p>}

      <label>
        Full name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>

      <label>
        Departure date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label>
        Travellers
        <select
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        >
          <option value="1">1 traveller</option>
          <option value="2">2 travellers</option>
          <option value="3">3 travellers</option>
          <option value="4">4 travellers</option>
          <option value="5">5 travellers</option>
        </select>
      </label>

      <button className="button button-primary" type="submit">
        Save trip · ${destination.price * Number(people)}
      </button>
    </form>
  );
}