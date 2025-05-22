import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CafeMenu from "./components/CafeMenu";
import BreakfastMenu from "./components/pages/BreakfastMenu";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cafe-menu" element={<CafeMenu />} />
          <Route path="/breakfast-menu" element={<BreakfastMenu />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
