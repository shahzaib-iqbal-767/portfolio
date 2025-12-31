import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/scrolltotop/scroll";

import BannerTop from "./Components/topbanner/banner";
import Navbar from "./Components/navbar/Navbar";
import HeroSection from "./Components/hero/Hero";
import AboutSection from "./Components/about/about";
import SkillsSection from "./Components/skills/skill";
import SkillsCircles from "./Components/circles/circle";
import Services from "./Components/services/service";
import Projects from "./Components/project/project";
import Testimonials from "./Components/testimonial/testimonial";
import Payments from "./Components/payment/payment";
import Blogs from "./Components/blog/blog";
import Newsletter from "./Components/newsletter/news";
import Logos from "./Components/logos/logo";
import Footer from "./Components/footer/footer";

import Contact from "./Components/contact/contact";
import AboutPage from "./Components/Aboutpage/Apage";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* HOME PAGE ROUTE */}
        <Route
          path="/"
          element={
            <>
              <BannerTop />
              <Navbar />
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <SkillsCircles />
              <Services />
              <Projects />
              <Testimonials />
              <Payments />
              <Blogs />
              <Newsletter />
              <Logos />
              <Footer />
            </>
          }
        />

        {/* CONTACT PAGE ROUTE */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;
