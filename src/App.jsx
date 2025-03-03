import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Rent from "./Rent/Rent.jsx";
import Maintenance from "./Maintenance/Maintenance";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact";
import Header from "./Header";
import Footer from "./Footer";
import PropertyDetail from "./Property.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}
