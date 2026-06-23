import React from "react";
import "./Admission.css";

const Admission = () => {
  return (
    <div className="admission-page">

      {/* Hero Section */}
      <section className="admission-hero">
        <div className="admission-overlay">
          <h1>Admissions Open 2026</h1>
          <p>Join our journey of excellence and innovation</p>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="admission-form-section">
        <div className="form-container">

          <h2>Enroll Your Child</h2>
          <p className="form-subtitle">
            Fill in the details below to begin your child's learning journey
          </p>

          <form className="admission-form">
            <input type="text" placeholder="Student Name" required />
            <input type="number" placeholder="Age" required />
            <input type="text" placeholder="Parent Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <textarea
              placeholder="Additional Details"
              rows="5"
            ></textarea>

            <button type="submit">Submit Application</button>
          </form>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="admission-benefits">
        <h2>Why Choose Our School?</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Innovative Learning</h3>
            <p>Smart classrooms with creative teaching methods.</p>
          </div>

          <div className="benefit-card">
            <h3>Expert Teachers</h3>
            <p>Experienced educators nurturing every child.</p>
          </div>

          <div className="benefit-card">
            <h3>Holistic Development</h3>
            <p>Academics, sports, arts, and leadership programs.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Admission;