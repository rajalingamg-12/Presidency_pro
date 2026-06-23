import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="program-page">

      {/* Animated Heading */}
      <section className="program-hero">
        <h1 className="moving-text">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>G</span>
          <span>R</span>
          <span>A</span>
          <span>M</span>
          <span>S</span>
        </h1>

        <p className="sub-text">
          Empowering Students Through Innovative Education.
        </p>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <h1 className="program-title">Our Programs</h1>

        <div className="flip-container">

          {/* Primary Program */}
          <div className="flip-card">
            <div className="flip-card-inner">

              <div className="flip-card-front">
                <h2>Primary Program</h2>
                <p className="flip-para">House of Children</p>
              </div>

              <div className="flip-card-back">
                <h2>Primary Skills</h2>
                <ul>
                  <li>* Practical Life Activities</li>
                  <li>* Sensorial Development</li>
                  <li>* Language Enrichment</li>
                  <li>* Early Mathematics</li>
                  <li>* Cultural Studies</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Elementary Program */}
          <div className="flip-card">
            <div className="flip-card-inner">

              <div className="flip-card-front">
                <h2>Elementary Program</h2>
                <p className="flip-para">Growing Beyond Boundaries</p>
              </div>

              <div className="flip-card-back">
                <h2>Elementary Skills</h2>
                <ul>
                  <li>* Cosmic Education</li>
                  <li>* Research-based Learning</li>
                  <li>* Moral & Social Development</li>
                  <li>* Collaborative Learning</li>
                  <li>* Social Responsibility</li>
                  <li>* Advanced Academic Skills</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Learning Approach */}
      <section className="learning-section">
        <h1 className="learning-title">Our Learning Approach</h1>

        <div className="learning-cards">
          <div className="learning-card">
            <h2>Montessori Method</h2>
            <p>
              Child-centered education focusing on independence,
              exploration, and hands-on learning.
            </p>
          </div>

          <div className="learning-card">
            <h2>STEM Education</h2>
            <p>
              Science, Technology, Engineering, and Mathematics integrated
              into practical learning experiences.
            </p>
          </div>

          <div className="learning-card">
            <h2>Creative Arts</h2>
            <p>
              Music, dance, painting, and drama to develop imagination
              and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Skill Development */}
      <section className="skills-section">
        <h1 className="skills-title">Skills We Build</h1>

        <div className="skills-grid">
          <div className="skill-box">Leadership</div>
          <div className="skill-box">Communication</div>
          <div className="skill-box">Problem Solving</div>
          <div className="skill-box">Critical Thinking</div>
          <div className="skill-box">Teamwork</div>
          <div className="skill-box">Creativity</div>
        </div>
      </section>

      {/* Special Activities */}
      <section className="activities-section">
        <h1 className="activities-title">Special Activities</h1>

        <p>
          Along with academics, students participate in sports, robotics,
          yoga, cultural festivals, science exhibitions, and leadership camps
          for complete development.
        </p>
      </section>

    </div>
  );
};

export default Programs;