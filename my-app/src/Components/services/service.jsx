
import React, { useEffect, useRef } from "react";
import "./service.css";

import 'animate.css';

const cardsData = [
  {
    title: "2011 - 2014 (Ui designer)",
    number: "Google Corporation.",
    desc: (
      <>
        All you need to do your best work <br />
        together in one package <br />
        works seamlessly computer.
      </>
    ),
  },
  {
    title: "2011 - 2014 (Ui designer)",
    number: "Google Corporation.",
    desc: (
      <>
        All you need to do your best work <br />
        together in one package <br />
        works seamlessly computer.
      </>
    ),
  },
  {
    title: "2011 - 2014 (Ui designer)",
    number: "Google Corporation.",
    desc: (
      <>
        All you need to do your best work <br />
        together in one package <br />
        works seamlessly computer.
      </>
    ),
  },
];


const Services = () => {



const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
  }, []);






  return (
    <section className="service-section" id="services">
      <div className="top-section"  ref={sectionRef}>
        <div className="left-side">
          <div>
          <h6 className="title-animate">What We Do</h6>
          <h1 className="heading-animate">Services & Solutions</h1>
          </div>
        </div>
        <div className="right-side">
          <div className="vertical-border"></div>
          <p className="para-animate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>

        <div className="ser-cards-section">
        {cardsData.map((card, index) => (
          <div className="service-card" key={index}>
            <h4>{card.title}</h4>
            <h2>{card.number}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;