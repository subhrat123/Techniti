import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Landing from "./landing";
import ContactUs from "./contactUs";
import Rounds from "./rounds";
import Footer from "./footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage with all sections */}

        <Route path="/" element={
          <>
            <Landing />
            <Rounds />
            <ContactUs />
          </>
        } />

        {/* Individual section pages */}
        <Route path="/rounds" element={<Rounds />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>

      <Footer />
    </Router >
  );
}

export default App;
