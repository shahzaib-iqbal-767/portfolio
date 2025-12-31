
import React from "react";
import "./banner.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

const BannerTop = () => {
  return (
    <div className="banner-top">
      <div className="container">
        <div className="banner-top-left">
          <div className="banner-icon">
            <FaComments />
          </div>
          <p className="banner-text">
            “Elementor is a great WordPress builder for modern websites.”
          </p>
        </div>

        <div className="banner-top-right">
          <ul className="social-icons">
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaLinkedinIn /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
          </ul>
          <a href="#" className="contact-btn">
            Contact Me →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
