import React, { useState, useEffect } from "react";
import "./Home.css";

import school1 from "../../assets/school1.jpeg";
import school2 from "../../assets/school2.jpeg";
import school3 from "../../assets/school3.jpeg";
import school4 from "../../assets/school4.jpeg";
import school5 from "../../assets/school5.jpeg";
import school6 from "../../assets/school6.jpeg";
import school7 from "../../assets/school7.jpeg";
import school8 from "../../assets/school8.jpeg";
import school9 from "../../assets/school9.jpeg";
import school10 from "../../assets/school10.jpeg";



const images = [school1, school2, school3, school4, school5, school6];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slide);
  }, []);

  return (
    <div className="home">

      {/* Full Background Carousel Hero */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${images[current]})`,
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1> WELCOME TO THE PRESIDENCY MONTESSORI SCHOOL</h1>
          <p>
            Building bright futures through creativity, innovation, and
            excellence in education.
          </p>

          <div className="hero-buttons">
            <button>Admission is Going On </button>

            {/* <button>OTHER BRANCH</button> */}
          </div>
        </div>
      </section>
      
      {/* Moving Skills Section */}

      <section className="skills-marquee">
        <div className="skills-track">
          <span>Practical Life Activities</span>
          <span>Sensorial Development</span>
          <span>Language Enrichment</span>
          <span>Early Mathematics</span>
          <span>Cultural Studies</span>
          <span>Cosmic Education</span>
          <span>Research-Based Learning</span>
          <span>Moral Development</span>
          <span>Collaborative Learning</span>
          <span>Social Responsibility</span>
          <span>Advanced Academics</span>

          {/* Duplicate for smooth infinite loop */}
          <span>Practical Life Activities</span>
          <span>Sensorial Development</span>
          <span>Language Enrichment</span>
          <span>Early Mathematics</span>
          <span>Cultural Studies</span>
          <span>Cosmic Education</span>
          <span>Research-Based Learning</span>
          <span>Moral Development</span>
          <span>Collaborative Learning</span>
          <span>Social Responsibility</span>
          <span>Advanced Academics</span>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="campus-section">
        <h1 className="campus-title">Our Campuses</h1>

        <div className="campus-cards">

          {/* Main Campus */}
          <div className="campus-card">
            <h2>Main Campus</h2>
            <p>
              📍 The Presidency International Montessori School, Main Campus <br />
              Pallichanvilai,Kandanvilai Post, Kanyakumari District-629 810, Tamil Nadu <br />
              Phone: +91 9894035037,8220135037 <br />
            </p>
          </div>

          {/* Other Branch */}
          <div className="campus-card">
            <h2>Other Branch</h2>
            <p>
              📍 The Presidency Montessori House Of Children, Branch Campus <br />
              Kalai Nagar Road,Irulappapuram,Nagercoil- 629 002.<br />
              Phone: +91 9894035037,8220135037. <br />
            </p>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="programs-section">
        <h1 className="program-title">Our Programs</h1>

        <div className="flip-container">

          {/* Primary Program */}
          <div className="flip-card">
            <div className="flip-card-inner">

              <div className="flip-card-front">
                <h2>Primary Program</h2>
                <p className="flip-para"> Ages 2 - 6 Years</p>
              </div>

              <div className="flip-card-back">
                <h2>House of Children</h2>
                <p>
                  Building independence, concentration, and foundational learning
                  through Montessori activities.
                </p>
              </div>

            </div>
          </div>

          {/* Elementary Program */}
          <div className="flip-card">
            <div className="flip-card-inner">

              <div className="flip-card-front">
                <h2>Elementary Program</h2>
                <p className="flip-para">Ages 6 - 12 Years</p>
              </div>

              <div className="flip-card-back">
                <h2>Advanced Learning</h2>
                <p>
                  Encouraging creativity, leadership, teamwork, and academic growth
                  through exploration.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Celebrations Section */}
      <section className="celebrations-section">
        <h1 className="celebration-title">Our Celebrations</h1>

        <div className="celebration-container">

          <div className="celebration-card">
            <img src={school7} alt="Pongal Celebration" />
            <div className="celebration-content">
              <h2>Pongal Celebration </h2>
              <p>
                At The Presidency Montessori School, Pongal is celebrated with great joy and cultural spirit, teaching children the value of gratitude and tradition.
                Students participate in traditional activities, colorful rangoli, and festive performances, making the celebration memorable and meaningful.
              </p>
            </div>
          </div>

          <div className="celebration-card">
            <img src={school8} alt="First day" />
            <div className="celebration-content">
              <h2>First Day</h2>
              <p>
                The first day at The Presidency Montessori School is filled with excitement, smiles, and new beginnings.
                We warmly welcome our little learners into a joyful and caring environment, making their first step in education a memorable journey.
              </p>
            </div>
          </div>

          <div className="celebration-card">
            <img src={school9} alt="Annuval Day" />
            <div className="celebration-content">
              <h2>Annuval Day</h2>
              <p>
                Annual Day at The Presidency Montessori School is a grand celebration of talent, creativity, and achievement.
                Our students shine through cultural performances, music, dance, and stage activities, creating unforgettable memories for everyone.
              </p>
            </div>
          </div>

          <div className="celebration-card">
            <img src={school10} alt="Science Day" />
            <div className="celebration-content">
              <h2>Science Day </h2>
              <p>
                Science Day at The Presidency Montessori School inspires young minds to explore, discover, and innovate.
                Students actively participate in experiments, projects, and exhibitions, developing curiosity and a love for scientific learning.
              </p>
            </div>
          </div>

          <div className="celebration-card">
            <img src={school4} alt="onam" />
            <div className="celebration-content">
              <h2>Onam Celebration </h2>
              <p>
                Onam at The Presidency Montessori School is celebrated with happiness, togetherness, and cultural pride.
                Students enjoy traditional activities, vibrant floral decorations, and festive performances, learning the values of unity and heritage.        </p>
            </div>
          </div>

          <div className="celebration-card">
            <img src={school2} alt="Independance" />
            <div className="celebration-content">
              <h2>Independance Day Celebration </h2>
              <p>
                Independence Day at The Presidency Montessori School is celebrated with patriotism, pride, and respect for our nation.
                Students participate in flag hoisting, cultural programs, and patriotic activities, learning the value of freedom and unity.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;