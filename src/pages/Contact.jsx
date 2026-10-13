import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete every field.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="container page-section">
      <div className="page-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>We'd love to hear from you.</h1>
        <p>Send us a message using the form below.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        {error && <p className="form-error">{error}</p>}

        {success && (
          <p className="success-message">
            Your message passed validation. This demo does not send it to a server.
          </p>
        )}

        <label>
          Your name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
            rows="5"
          />
        </label>

        <button className="button button-primary" type="submit">
          Send message
        </button>
      </form>
    </main>
  );
}