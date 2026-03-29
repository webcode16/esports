import React from "react";
import "../About/About.scss";
import ourmission from "../../assets/our-mission.webp";
import whoweare from "../../assets/who-we-are.webp";

function About() {
  return (
    <div className="about-container">

      {/* ===== Section 1 : Banner ===== */}
      <div className="about-banner">
        <div className="banner-overlay d-flex justify-content-center align-center">
          <div className="inside-banner-overlay">
            <h1>About Us</h1>
            <p>Compete. Conquer. Celebrate Victory.</p>
          </div>
         
        </div>
      </div>

      {/* ===== Section 2 : Image Left - Content Right ===== */}
      <div className="about-section">
        <div className="about-image">
          <img 
            src={whoweare} 
            alt="Esports Tournament"
          />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>ESPORTS INDIA</strong>, your ultimate destination 
            for competitive esports tournaments. We are passionate gamers dedicated 
            to building a trusted and exciting platform for players to showcase 
            their skills and win real rewards.
          </p>
          <p>
            Our goal is to create a fair, transparent, and competitive 
            environment where talent meets opportunity.
          </p>
        </div>
      </div>

      {/* ===== Section 3 : Content Left - Image Right ===== */}
      <div className="about-section reverse">

        <div className="about-image">
          <img 
            src={ourmission}
            alt="Gaming Setup"

          />
        </div>

        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower gamers by providing organized tournaments 
            with secure payments, fast prize distribution, and strict anti-cheat policies.
          </p>
          <p>
            Whether you're a casual player or a competitive pro, 
            our platform gives you the opportunity to compete, grow, 
            and turn your passion into achievement.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;