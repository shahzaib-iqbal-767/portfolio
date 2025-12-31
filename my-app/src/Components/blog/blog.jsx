
import React, { useRef } from "react";
import "./blog.css";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import bimg1 from "../../assets/prjct img 1.jpg";
import bimg2 from "../../assets/prjct img 2.jpg";
import bimg3 from "../../assets/prjct img 3.jpg";
import bimg4 from "../../assets/prjct img 4.jpg";

import "swiper/css";
import "swiper/css/navigation";

const blogdata = [
    {
    src: bimg1,
    title: "2011 - 2014 (Ui designer)",
    htext: "ADDICTION WHEN GAMBLING BECOMES....",
     },
     {
    src: bimg2,
    title: "2011 - 2014 (Ui designer)",
    htext: "ADDICTION WHEN GAMBLING BECOMES....",
     },
     {
    src: bimg3,
    title: "2011 - 2014 (Ui designer)",
    htext: "ADDICTION WHEN GAMBLING BECOMES....",
     },
     {
    src: bimg4,
    title: "2011 - 2014 (Ui designer)",
    htext: "ADDICTION WHEN GAMBLING BECOMES....",
     },

  ];

const Blogs = () => {

  const swiperRef = useRef(null);

  return (
    <section className="blog-section"  id="blog">

      {/* HEADER SECTION */}
      <div className="top-section">
        <div className="left-side">
          <div>
            <h6>What We Do</h6>
            <h1>Services & Solutions</h1>
          </div>

          <div className="left-bottom">
            <div className="vertical-border"></div>

            <p>
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
        className="blog-slider"
         breakpoints={{
          0: {               //  Mobile (0px - 767px)
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {             //  Tablet (768px - 1023px)
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {            //  Desktop (1024px and above)
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
    <div className="b-section">
       {blogdata.map((item, index) => (
  <SwiperSlide key={index}>
    <div className="blog-card">
      
      <img src={item.src} alt="work" />
      
      <h4>{item.title}</h4>
      <h2>{item.htext}</h2>

      <div className="arrow-btn-2">
        <a className="read-more">Read More</a>
        <FaArrowRight className="arrow-icon" />
      </div>

    </div>
  </SwiperSlide>
))}
</div>
      </Swiper>

    </section>
  );
};

export default Blogs;
