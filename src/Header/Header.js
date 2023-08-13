import React, { useState } from 'react';
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';

function Header() {
  const [searchFormActive, setSearchFormActive] = useState(false);

  const toggleSearchForm = () => {
    setSearchFormActive(!searchFormActive);
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
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#teams">Teams</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
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

