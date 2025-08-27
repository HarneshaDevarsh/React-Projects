import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Image/logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow-md z-20">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <img src={logo} alt="CoffeeCo Logo" className="h-13" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className="hover:text-brown-600 hover:text-amber-900">Home</a>
            <a href="#menu" className="hover:text-brown-600 hover:text-amber-900">Menu</a>
            <a href="#about" className="hover:text-brown-600 hover:text-amber-900">About</a>
            <a href="#contact" className="hover:text-brown-600 hover:text-amber-900">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><a href="#home" className="hover:text-brown-600" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#menu" className="hover:text-brown-600" onClick={() => setMenuOpen(false)}>Menu</a></li>
              <li><a href="#about" className="hover:text-brown-600" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#contact" className="hover:text-brown-600" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611691934391-5a8805e0bd1a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Brewed to Perfection</h2>
          <p className="text-lg md:text-xl mb-6">Your daily dose of happiness in every cup</p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10 text-brown-700">
            <img src="" alt="" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Espresso", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVzcHJlc3NvfGVufDB8fDB8fHww" },
              { name: "Cappuccino", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
              { name: "Latte", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
            ].map((coffee, i) => (
              <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
                <img src={coffee.img} alt={coffee.name} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-brown-700">{coffee.name}</h4>
                  <p className="text-gray-600 mt-2">Rich flavor, brewed with love.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-brown-700 mb-6">About Us</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At CoffeeCo, we believe every sip tells a story. From carefully selected beans 
          to expert brewing, we bring the world’s best coffee to your cup.  
          Our café is more than a coffee shop—it’s a place to connect, relax, and enjoy.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-brown-700 mb-6">Contact Us</h3>
          <p className="text-gray-600">Visit us at Coffee Street, New York, or call us at (123) 456-7890</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Blue Peak Coffee. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
