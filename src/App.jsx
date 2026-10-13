import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Beaches from "./pages/Beaches.jsx";
import Mountains from "./pages/Mountains.jsx";
import Cities from "./pages/Cities.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Trips from "./pages/Trips.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./App.css";

export default function App() {
  const [mode, setMode] = useState("light");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className={mode === "dark" ? "app dark-mode" : "app"}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/explore" element={<Explore />}>
            <Route index element={<Beaches />} />
            <Route path="beaches" element={<Beaches />} />
            <Route path="mountains" element={<Mountains />} />
            <Route path="cities" element={<Cities />} />
          </Route>

          <Route
            path="/destination/:id"
            element={<DestinationDetails />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}