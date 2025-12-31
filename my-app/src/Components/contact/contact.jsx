import React from "react";
import "./contact.css";
import BannerTop from "../topbanner/banner";
import Navbar from "../navbar/Navbar";
import ContactForm from "../contactform/form";
import Newsletter from "../newsletter/news";
import Logos from "../logos/logo";
import Footer from "../footer/footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contactCards = [
  {
    icon: <FaMapMarkerAlt />,
    text1: "ADDRESS LINE",
    text2: "9327 Pairire St. Grove City, OH",
    text3: 43123,
  },
  {
    icon: <FaPhoneAlt />,
    text1: "PHONE",
    text2: "+2546133254",
    text3: "+2546133254",
  },
  {
    icon: <FaEnvelope />,
    text1: "EMAIL",
    text2: "Email@Example.com",
    text3: "Info@example.com",
  },
];

const Contact = () => {
  return (
    <>
      <BannerTop />
      <Navbar />

      <div className="contact-page">
        <div className="contact-h">
          <h1>
            <span>Contact</span> Page
          </h1>
        </div>

        <div className="contact-cards">
          {contactCards.map((item, index) => (
            <div className="contact-card" key={index}>
              <div className="contact-icon">{item.icon}</div>

              <h3>{item.text1}</h3>

              <p>{item.text2}</p>
              <p>{item.text3}</p>
            </div>
          ))}
        </div>

            <ContactForm />

            <section className="cntct-sec-2">
                <Newsletter />
            </section>

            <section>
                <Logos />
            </section>

            <section>
                <Footer />
            </section>

      </div>
       

    </>
  );
};

export default Contact;
