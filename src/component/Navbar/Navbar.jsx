import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_school.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>

      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="School Logo" className="logo-img" />
          {/* <h2 className="school-name">
            THE PRESIDENCY MONTESSORI SCHOOL
          </h2> */}
        </div>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to='/aboutus'>AboutUs</NavLink></li>
          <li><NavLink to="/campuses">Campus</NavLink></li>
          <li><NavLink to="/programs">Programs</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>


        <NavLink to="/admission">
          <button className="admission-btn">Enroll Now</button>
        </NavLink>      
        </nav>
    </>
  );
};

export default Navbar;