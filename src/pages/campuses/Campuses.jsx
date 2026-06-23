import React from "react";
import "./Campuses.css";

const Campuses = () => {
  return (
    <div className="campus-page">

      {/* Hero Section */}
      <section className="campus-hero">
        <div className="campus-overlay">
          <h1>Our Campus</h1>
          <p>
            Explore our vibrant learning spaces designed for creativity,
            growth, and excellence.
          </p>
        </div>
      </section>

      {/* Campus Introduction */}
      <section className="campus-intro">
        <h2>Learning Beyond Classrooms</h2>
        <p>
          Our campuses are designed to create a safe, engaging, and inspiring
          environment where students can learn, play, and grow.
        </p>
      </section>

      {/* Your Existing Campus Section (unchanged) */}
      <section className="campus-section">
        <h1 className="campus-title">Our Campuses</h1>

        <div className="campus-cards">

          <div className="campus-card">
            <h2>Main Campus</h2>
            <p>
              📍 The Presidency Montessori School, Main Campus <br />
              Tindivanam, Tamil Nadu <br />
              Spacious classrooms, Montessori labs, activity center, and sports area.
            </p>
          </div>

          <div className="campus-card">
            <h2>Other Branch</h2>
            <p>
              📍 The Presidency Montessori School, Branch Campus <br />
              Villupuram, Tamil Nadu <br />
              Advanced learning spaces, child-friendly campus, and cultural activity zone.
            </p>
          </div>

        </div>
      </section>

      {/* Campus Facilities */}
      <section className="campus-facilities">
        <h2>Campus Facilities</h2>

        <div className="facility-grid">
          <div className="facility-box">Smart Classrooms</div>
          <div className="facility-box">Science Labs</div>
          <div className="facility-box">Library</div>
          <div className="facility-box">Sports Ground</div>
          <div className="facility-box">Transport Facility</div>
          <div className="facility-box">Activity Center</div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="campus-life">
        <h2>Campus Life</h2>
        <p>
          Students enjoy a balanced school life with academics, sports,
          cultural events, leadership programs, and community engagement.
        </p>
      </section>

    </div>
  );
};

export default Campuses;