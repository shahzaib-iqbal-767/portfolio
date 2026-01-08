import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setShowNavbar(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Function to scroll even when coming from another page
  const scrollOrRedirect = (section) => {
    if (location.pathname !== "/") {
      navigate("/");

      // Wait for page render
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 600,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      }, 200);

    } else {
      scroller.scrollTo(section, {
        duration: 600,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    }

    setIsOpen(false);
  };


  return (
    <header className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="container">

        <h1 className="logo">Portfolio</h1>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>

          <RouterLink to="/" onClick={() => scrollOrRedirect("hero")} className="nav-link">
            Home
          </RouterLink>

          <RouterLink to="/" onClick={() => scrollOrRedirect("about")} className="nav-link">
            About
          </RouterLink>

          <RouterLink to="/" onClick={() => scrollOrRedirect("skills")} className="nav-link">
            Skills
          </RouterLink>

          <RouterLink to="/" onClick={() => scrollOrRedirect("services")} className="nav-link">
            Services
          </RouterLink>

          <RouterLink to="/" onClick={() => scrollOrRedirect("projects")} className="nav-link">
            Projects
          </RouterLink>

          <RouterLink to="/" onClick={() => scrollOrRedirect("blog")} className="nav-link">
            Blog
          </RouterLink>


          <RouterLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </RouterLink>

        </nav>

        <div className="nav-actions">
          <FaSearch className="search-icon" />
          <button className="menu-btn" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
