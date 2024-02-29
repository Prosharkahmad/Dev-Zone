import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
