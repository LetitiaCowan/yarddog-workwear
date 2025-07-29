import React from "react";
import { Footer } from "./components/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Nav } from "./components/Nav.jsx";
import Products from "./pages/Products.jsx";
import Auth from "./pages/Auth.jsx";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
