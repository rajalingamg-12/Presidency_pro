import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            The Presidency Montessori School is dedicated to nurturing young
            minds with innovative learning methods, strong values, and holistic
            development for a brighter future.
          </p>
        </div>

        {/* Programs */}
        <div className="footer-section">
          <h2>Our Programs</h2>
          <ul>
            <li><NavLink to="/programs">Pre-KG & Kindergarten</NavLink></li>
            <li><NavLink to="/programs">Primary Education</NavLink></li>
            <li><NavLink to="/programs">Middle School Programs</NavLink></li>
            <li><NavLink to="/programs">Creative Learning Modules</NavLink></li>
            <li><NavLink to="/programs">STEM Education</NavLink></li>
          </ul>
        </div>

        {/* Activities */}
        <div className="footer-section">
          <h2>Extra Curricular</h2>
          <ul>
            <li>Sports & Fitness</li>
            <li>Dance & Music</li>
            <li>Arts & Crafts</li>
            <li>Robotics Club</li>
            <li>Public Speaking</li>
          </ul>
        </div>

        {/* Celebrations */}
        <div className="footer-section">
          <h2>Celebrations</h2>
          <ul>
            <li>Annual Day</li>
            <li>Sports Day</li>
            <li>Cultural Fest</li>
            <li>Science Exhibition</li>
            <li>Festival Celebrations</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/campuses">Campuses</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 The Presidency Montessori School | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;