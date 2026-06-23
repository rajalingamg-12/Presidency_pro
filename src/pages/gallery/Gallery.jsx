import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-page">

      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-overlay">
          <h1 className="fade-down">Our Gallery</h1>
          <p className="fade-up">
            Capturing beautiful memories, celebrations, and achievements
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="gallery-intro">
        <h2 className="slide-left">School Moments</h2>
        <p className="slide-right">
          Explore our school life through classroom activities, events,
          sports, celebrations, and student achievements.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-grid">

          <div className="gallery-card zoom-in">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="Classroom"
            />
          </div>

          <div className="gallery-card rotate-in">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students"
            />
          </div>

          <div className="gallery-card zoom-in">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
              alt="Library"
            />
          </div>

          <div className="gallery-card slide-up">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
              alt="Sports"
            />
          </div>

          <div className="gallery-card rotate-in">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
              alt="Event"
            />
          </div>

          <div className="gallery-card slide-up">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Achievement"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Gallery;