import React, { useEffect, useRef } from "react";
import "./skill.css";

import { motion } from "framer-motion";

import 'animate.css';

const cardsData = [
  {
    title: "2011 - 2014 (Ui designer)",
    number: "Google Corporation",
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
    number: "Google Corporation",
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
    number: "Google Corporation",
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
    number: "Google Corporation",
    desc: (
      <>
        All you need to do your best work <br />
        together in one package <br />
        works seamlessly computer.
      </>
    ),
  },
];

const SkillsSection = () => {

const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__backInUp",
              "animate__slow"
            );
          }
        });
      },
      { threshold: 0.2 } // triggers smoothly when card becomes visible
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);



  return (
    <section className="skills-section" id="skills">
      <div className="top-section">
        <div className="left-side">
          <div>

            <motion.h6
              initial={{ opacity: 0, y: -35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h6>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Skills & Expertise
            </motion.h1>

          </div>
        </div>
        <div className="right-side">
          <div className="vertical-border"></div>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Sed do eiusmod tempor incididunt ut labore et dolore.
          </motion.p>

        </div>
      </div>

      <div className="cards-section">
        {cardsData.map((card, index) => (
          <div className="skill-card" key={index} ref={(el) => (cardRefs.current[index] = el)}>
            <h4>{card.title}</h4>
            <h2>{card.number}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
