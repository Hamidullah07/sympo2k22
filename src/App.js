import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Tech from "./Components/Technical/Technical";
import NonTech from "./Components/Non-Tech/Non-Tech";
import Sports from "./Components/Sports/Sports";
import Contact from "./Components/Contact/Contact";
import { Route, Routes } from "react-router";
// import {Routes} from 'react-router-dom'
import EventPage from "./Components/Pages/EventPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/technical" element={<Tech />} />
        <Route path="/non-tech" element={<NonTech />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eventPage/:id" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
