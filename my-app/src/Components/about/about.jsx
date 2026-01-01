
import React from "react";
import "./about.css";
import aboutImg from "../../assets/heroimg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        {/* Left side - Video / Image */}
        <div className="about-left">
          <div className="about-image-wrap">
            <img src={aboutImg} alt="About" className="about-image" />
            <div className="play-button">
              <span>▶</span>
            </div>
          </div>
        </div>

        {/* Right side - Text */}
        <div className="about-right">
          <div className="heading">
            {/* <strong className="filltext">About Us</strong> */}
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Failure is the condiment <br />
              That Gives <span>Success</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Spend more time focusing on the important aspects of your business.
              Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an
              advanced virtual HR company, we are offering online HR systems that
              can be customized depending on your business needs.
            </motion.p>
            <motion.a
              href="#"
              className="about-btn"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/about">
                READ MORE
              </Link>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
