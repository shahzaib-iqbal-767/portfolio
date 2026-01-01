import React, { useRef } from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import testimonialimg from "../../assets/heroimg.jpg";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const swiperRef = useRef(null);

  const tesimages = [
    { 
      src: testimonialimg, 
      text1: ",,",
      text2: (
      <>
        All you need to do your best work Lorem ipsum dolor sit <br />
        together in one package Lorem ipsum dolor sit amet, consect <br />
        works seamlessly computer sit amet.
      </>
    ),
      text3: "Creative Design"
    },
    { 
      src: testimonialimg, 
      text1: ",,",
      text2: (
      <>
        All you need to do your best work Lorem ipsum dolor sit <br />
        together in one package Lorem ipsum dolor sit amet, consect <br />
        works seamlessly computer sit amet.
      </>
    ),
      text3: "Smart Strategy Line 3"
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="top-section">
        <div className="left-side">
          <div>
            <h6>Testimonial</h6>
            <h1>Satisfied Clients</h1>
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
      {/* SLIDER SECTION */}
<Swiper
  modules={[Navigation, Autoplay]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  slidesPerView={1}
  loop={true}
  speed={1200}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  effect="slide"
  className="testi-slider"
>
  {tesimages.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="testimonial-card">
       
        <div className="img-wrap">
  <img src={item.src} alt="testimonial" className="testimonial-img" />
    </div>

        <div className="testimonial-content">
          <p className="p1">{item.text1}</p>

          <div
            className="testimonial-text2">
            <h1>{item.text2}</h1>
          </div>

          <p className="p2">{item.text3}</p>
        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
};

export default Testimonials;
