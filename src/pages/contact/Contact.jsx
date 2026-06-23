import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>We are here to answer your questions and guide you</p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="contact-section">

        <div className="contact-info fade-left">
          <h2>Get In Touch</h2>

          <div className="info-card">
            <h3>Address</h3>
            <p>
              The Presidency Montessori School <br />
           Tamil Nadu, India
            </p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p>info@presidencymontessori.com</p>
          </div>

          <div className="info-card">
            <h3>Working Hours</h3>
            <p>Monday - Friday : 8:30 AM - 4:30 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form fade-right">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </section>

    </div>
  );
};

export default Contact;