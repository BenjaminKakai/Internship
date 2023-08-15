import React, { useState, useRef } from 'react';
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';

function Header() {
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const fadeOutTimeout = useRef(null);

  const toggleSearchForm = () => {
    setSearchFormActive(!searchFormActive);
  };

  const handleMouseEnter = (menu) => {
    setHoverMenu(menu);
    if (fadeOutTimeout.current) {
      clearTimeout(fadeOutTimeout.current);
    }
  };

  const handleMouseLeave = () => {
    fadeOutTimeout.current = setTimeout(() => {
      setHoverMenu(null);
    }, 10000);
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
      <div className="navbar-bottom">
        <a className="brand-left" href="#home">
          <img src={logoPath} alt="INTELIVERSE" className="brand-logo" />
        </a>
        <ul className="menu-right">
          <li onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>
            <a href="#home">Home</a>
            {hoverMenu === 'home' && (
              <div className="dropdown home expanded">
                {/* Home Dropdown Content */}
                <a href="#services">Services</a><br />
                <a href="#portfolio">Portfolio</a><br />
                <a href="#teams">Teams</a><br />
                <a href="#blog">Blog</a><br />
                <a href="#contact">Contact</a><br />
              </div>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
            <a href="#services">Services</a>
            {hoverMenu === 'services' && (
              <div className="dropdown services expanded">
                {/* Services Dropdown Content */}
                <a href="#">Artificial Intelligence & Machine Learning</a>
                <div className="subcategories">
                  <a href="#">AI Consulting</a><br />
                  <a href="#">MLOps Consulting</a>
                </div>
                <a href="#">Data Engineering</a>
                <div className="subcategories">
                  <a href="#">Data Engineering Services</a><br />
                  <a href="#">Big Data Consulting</a>
                </div>
                <a href="#">Generative AI</a>
                <div className="subcategories">
                  <a href="#">AI Development</a>
                </div>
                <a href="#">Enterprise Ready Solutions</a>
              </div>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEnter('portfolio')} onMouseLeave={handleMouseLeave}>
            <a href="#portfolio">Portfolio</a>
            {hoverMenu === 'portfolio' && (
              <div className="dropdown portfolio expanded">
                {/* Portfolio Dropdown Content */}
                <div className="row">
                  <a href="#">Solutions</a>
                  <div className="subcategories">
                    <a href="#">Manufacturing</a><br />
                    <a href="#">Retail</a><br />
                    <a href="#">Technology Companies</a><br />
                    <a href="#">Finance Insurance</a>
                  </div>
                </div>
                <div className="row">
                  <a href="#">Technologies</a><br />
                  <div className="subcategories">
                    <a href="#">Computer Vision Solutions</a><br />
                    <a href="#">NLP</a>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEnter('teams')} onMouseLeave={handleMouseLeave}>
            <a href="#teams">Teams</a>
            {hoverMenu === 'teams' && (
              <div className="dropdown teams expanded">
                {/* Teams Dropdown Content */}
                <div className="row">
                  <a href="#">Careers</a>
                  <div className="subcategories">
                    <a href="#">Check Job Opportunities and Join Us</a>
                    <a href="#">Learn More About How It Is to Work with Inteliverse</a>
                  </div>
                </div>
                <div className="row">
                  <a href="#">Professionals at Inteliverse</a>
                  <div className="subcategories">
                    <a href="#">Software Development Teams</a>
                    <a href="#">Data Engineering Teams</a>
                    <a href="#">Machine Learning Team</a>
                    <a href="#">DevOps Team</a>
                    <a href="#">Security Team</a>
                    <a href="#">User Experience and User Interface Design Team</a>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
            <a href="#blog">Blog</a>
            {hoverMenu === 'blog' && (
              <div className="dropdown blog expanded">
                {/* Blog Dropdown Content */}
                <a href="#">Data Analytics</a>
                <a href="#">Data-Driven Revenue</a>
                <a href="#">Growth Insights for the Retail Industry</a>
              </div>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>
            <a href="#contact">Contact</a>
            {hoverMenu === 'contact' && (
              <div className="dropdown contact expanded">
                {/* Contact Dropdown Content */}
                <a href="#">Email</a>
                <a href="#">Phone Number</a>
              </div>
            )}
          </li>
          <li><a href="#" onClick={toggleSearchForm}><i className="bx bx-search bx-sm" id="search-btn"></i></a></li>
        </ul>
        <div className={`search-form ${searchFormActive ? 'active' : ''}`}>
          <input id="search-box" name="search-box" placeholder="search here..." type="search" />
          <label className="bx bx-search bx-sm" htmlFor="search-box"></label>
        </div>
      </div>
    </div>
  );
}

export default Header;

