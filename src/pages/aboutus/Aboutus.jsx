import React from "react";
import "../aboutus/Aboutus.css";
import school6 from "../../assets/school6.jpeg";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Our School</h1>
          <p>
            Building bright futures through knowledge, creativity, and values.
          </p>
        </div>
      </section>

      {/* School Introduction */}
      <section className="about-section fade-up">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            The Presidency Montessori School is committed to providing
            excellence in education by blending traditional values with
            innovative learning methodologies.
          </p>
        </div>

        <div className="about-image">
          <img src={school6} alt="School Building" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="card fade-left">
          <h2>Our Vision</h2>
          <p>
            To inspire young minds to become confident, responsible, and
            successful global citizens.
          </p>
        </div>

        <div className="card fade-right">
          <h2>Our Mission</h2>
          <p>
            To provide quality education with creativity, discipline, and
            character development.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us fade-up">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Innovative Learning</h3>
            <p>Smart classrooms with creative teaching methods.</p>
          </div>

          <div className="why-card">
            <h3>Experienced Teachers</h3>
            <p>Highly qualified educators guiding every child.</p>
          </div>

          <div className="why-card">
            <h3>Holistic Development</h3>
            <p>Focus on academics, sports, and life skills.</p>
          </div>

          <div className="why-card">
            <h3>Safe Environment</h3>
            <p>Secure campus ensuring a peaceful learning atmosphere.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;