import React, { useEffect, useRef } from "react";
import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import 'animate.css';

import prjctimg1 from "../../assets/prjct img 1.jpg";
import prjctimg2 from "../../assets/prjct img 2.jpg";
import prjctimg3 from "../../assets/prjct img 3.jpg";
import prjctimg4 from "../../assets/prjct img 4.jpg";


const images = [
  { src: prjctimg1, text: "Creative Design" },
  { src: prjctimg2, text: "Smart Strategy" },
  { src: prjctimg3, text: "Digital Solutions" },
  { src: prjctimg4, text: "Quality Service" }
];



const Projects = () => {

  const swiperRef = useRef(null);

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
    <section className="project-section" id="projects">

      {/* HEADER SECTION */}
      <div className="top-section" ref={sectionRef}>
        <div className="left-side">
          <div>
            <h6 className="p-title-animate">Valuable</h6>
            <h1 className="p-heading-animate">Projects</h1>
          </div>

          <div className="left-bottom">
            <div className="vertical-border"></div>

            <p className="p-para-animate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>

        {/* ARROWS */}
        <div className="arrows-box">
          <div className="arrow-btn" onClick={() => swiperRef.current.slidePrev()}>
            <span>&larr;</span>
          </div>
          <div className="arrow-btn" onClick={() => swiperRef.current.slideNext()}>
            <span>&rarr;</span>
          </div>
        </div>
      </div>

      {/* SLIDER SECTION */}
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="project-slider"
        breakpoints={{
          0: {               // ⬅️ Mobile (0px - 767px)
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {             // ⬅️ Tablet (768px - 1023px)
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {            // ⬅️ Desktop (1024px and above)
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={item.src} alt="work" />

              <div className="overlay">
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </section>
  );
};

export default Projects;
