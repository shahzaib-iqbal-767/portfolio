
import React from "react";
import "./Hero.css";
import heroBg from "../../assets/herobg.jpg"; 
import authorImg from "../../assets/author1.png"; 

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            <span>Imagination</span> is more important than knowledge
          </h1>
          <p>
            Together we the people achieve more than any single person
            could ever do alone.
          </p>
          <a href="#about" className="hero-btn">
            Get Started <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>

        <div className="hero-image">
          <img src={authorImg} alt="Author" />
          <h1 className="bg-text">gilroy</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
