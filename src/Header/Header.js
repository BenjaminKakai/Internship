import React, { useState, useRef } from 'react';
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';

function Header() {
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const fadeOutTimeout = useRef(null);

  const toggleSearchForm = () => {
    setSearchFormActive(!searchFormActive);
  };

  const handleMouseEnter = () => {
    setServicesHover(true);
    setDropdownVisible(true);
    if (fadeOutTimeout.current) {
      clearTimeout(fadeOutTimeout.current); // Clear the timeout if re-hovered
    }
  };

  const handleMouseLeave = () => {
    setServicesHover(false);
    fadeOutTimeout.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 10000);
  };

  const handleOtherMenuHover = () => {
    if (fadeOutTimeout.current) {
      clearTimeout(fadeOutTimeout.current); // Clear the timeout if another menu is hovered
    }
    setDropdownVisible(false);
  };

  // Define the path to the logo image
  const logoPath = '/images/logo.png';

  return (
    <div className="showcase">
      <div className="navbar-top">
        <ul className="left">
          <li><a href="#">Nairobi, Kenya</a></li>
          <li><a href="#"><i className="bx bxs-time bx-xs"></i> Mon - Sat: 8:00am - 05:00pm</a></li>
          <li><a href="#"><i className="bx bxs-map bx-xs"></i> Upperhill</a></li>
          <li><a href="#"><i className="bx bxs-phone bx-xs"></i> +254705122230</a></li>
        </ul>
        <ul className="right">
          <li><a href="#"><i className="bx bxl-twitter bx-xs"></i></a></li>
          <li><a href="#"><i className="bx bxl-pinterest-alt bx-xs"></i></a></li>
          <li><a href="#"><i className="bx bxl-facebook bx-xs"></i></a></li>
          <li><a href="#"><i className="bx bxl-instagram-alt bx-xs"></i></a></li>
        </ul>
      </div>
      <div className={`navbar-bottom ${servicesHover ? 'services-dropdown-expanded' : ''}`}>
        <a className="brand-left" href="#home">
          <img src={logoPath} alt="INTELIVERSE" className="brand-logo" />
        </a>
        <ul className="menu-right">
          <li onMouseEnter={handleOtherMenuHover}><a href="#home">Home</a></li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#services">Services</a>
          </li>
          <li onMouseEnter={handleOtherMenuHover}><a href="#portfolio">Portfolio</a></li>
          <li onMouseEnter={handleOtherMenuHover}><a href="#teams">Teams</a></li>
          <li onMouseEnter={handleOtherMenuHover}><a href="#blog">Blog</a></li>
          <li onMouseEnter={handleOtherMenuHover}><a href="#contact">Contact</a></li>
          <li><a href="#" onClick={toggleSearchForm}><i className="bx bx-search bx-sm" id="search-btn"></i></a></li>
        </ul>
        <div className={`search-form ${searchFormActive ? 'active' : ''}`}>
          <input id="search-box" name="search-box" placeholder="search here..." type="search" />
          <label className="bx bx-search bx-sm" htmlFor="search-box"></label>
        </div>
      </div>
      {dropdownVisible && (
        <div className="services-dropdown expanded">
          <div className="row">
            <a href="#">Artificial Intelligence & Machine Learning</a>
            <div className="subcategories">
              <a href="#">AI Consulting</a>
              <a href="#">MLOps Consulting</a>
            </div>
          </div>
          <div className="row">
            <a href="#">Data Engineering</a>
            <div className="subcategories">
              <a href="#">Data Engineering Services</a>
              <a href="#">Big Data Consulting</a>
            </div>
          </div>
          <div className="row">
            <a href="#">Generative AI</a>
            <div className="subcategories">
              <a href="#">AI Development</a>
            </div>
          </div>
          <div className="row">
            <a href="#">Enterprise Ready Solutions</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

