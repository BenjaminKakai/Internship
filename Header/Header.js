import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';
import './headerservices.css'; 
// Rest of the code...

function Header() {
  const logoPath = '/images/logo.png';

  const handleMouseEnter = (contentType) => {
    const navbarBottom = document.querySelector('.navbar-bottom');
    navbarBottom.style.backgroundColor = '#ffffff';

    let dropdownContent;
    switch (contentType) {
      case 'services':
        dropdownContent = document.querySelector('.services-content');
        break;
      case 'portfolio':
        dropdownContent = document.querySelector('.portfolio-content');
        break;
      case 'teams':
        dropdownContent = document.querySelector('.teams-content');
        break;
      default:
        return;
    }

    if (dropdownContent) {
      dropdownContent.style.display = 'grid'; // Show as grid
    }
  };

  const handleMouseLeave = (contentType) => {
    const navbarBottom = document.querySelector('.navbar-bottom');
    navbarBottom.style.backgroundColor = 'transparent';

    let dropdownContent;
    switch (contentType) {
      case 'services':
        dropdownContent = document.querySelector('.services-content');
        break;
      case 'portfolio':
        dropdownContent = document.querySelector('.portfolio-content');
        break;
      case 'teams':
        dropdownContent = document.querySelector('.teams-content');
        break;
      default:
        return;
    }

    if (dropdownContent) {
      dropdownContent.style.display = 'none'; // Hide
    }
  };

  // ...

 return (
  <div className="showcase">
    <div className="navbar-top">
      <ul className="left">
        <li><a href="#">Download our AI in Business | Global Trends Report 2023 and stay ahead of the curve!</a></li>
      </ul>
    </div>

    <div className="navbar-bottom">
      <a className="brand-left" href="#home">
        <img src={logoPath} alt="INTELIVERSE" className="brand-logo" />
      </a>
      <ul className="menu-right">
        <li>
          <div
            className="dropdown services-dropdown"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={() => handleMouseLeave('services')}
          >
            <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Services</button>
            <div
              className="dropdown-content services-content extended-dropdown"
              style={{
                display: 'none', // Hide initially
                gridTemplateColumns: '1fr 1fr 1fr' // Three columns
              }}
            >
              <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                <h3>Artificial Intelligence & ML</h3>
                <a href="#" className="submenu-link slide-left">MLOps Consulting</a>
              </div>
              <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                <h3>Data Engineering</h3>
                <a href="#" className="submenu-link slide-left">Data Engineering Services</a>
                <a href="#" className="submenu-link slide-left">Big Data Consulting</a>
              </div>
              <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                <h3>Generative AI</h3>
                <a href="#" className="submenu-link slide-left">Generative AI Development Company</a>
              </div>
            </div>
            <div className="extended-dropdown">
              {/* ... Extended Content ... */}
            </div>
          </div>
        </li>

     

        <li>
          <div className="dropdown" onMouseEnter={() => handleMouseEnter('portfolio')} onMouseLeave={() => handleMouseLeave('portfolio')}>
            <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Portfolio</button>
            <div className="dropdown-content">
              <div className="submenu-link" style={{ cursor: 'pointer' }}>
                Solutions <span className="arrow">&gt;</span>
              </div>
              <div className="submenu">
                <a href="#" className="submenu-link slide-left">Manufacturing</a>
                <br /><a href="#" className="submenu-link slide-left">Retail</a>
                <br /><a href="#" className="submenu-link slide-left">Technology</a>
                <br /><a href="#" className="submenu-link slide-left">Finance and Insurance</a>
              </div>
              <div className="submenu-link" style={{ cursor: 'pointer' }}>
                Technologies <span className="arrow">&gt;</span>
              </div>
              <div className="submenu">
                <a href="#" className="submenu-link slide-left">Computer Vision Solutions</a>
                <br /><a href="#" className="submenu-link slide-left">NLP</a>
              </div>
            </div>
          </div>
        </li>
        
<li>
  <div className="dropdown">
    <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Resources</button>
    <div className="dropdown-content">
      <div className="submenu-link slide-left">
        Latest Blogs on Data Analytics and AI <span className="arrow">&gt;</span>
      </div>
    </div>
  </div>
</li>


<li>
  <div className="dropdown">
    <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Blog</button>
    <div className="dropdown-content">
      <div className="submenu-link slide-left">
        Latest Blogs on Data Analytics and AI <span className="arrow">&gt;</span>
      </div>
    </div>
  </div>
</li>


<li>
  <div className="dropdown" onMouseEnter={() => handleMouseEnter('teams')} onMouseLeave={handleMouseLeave}>
    <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Teams</button>
    <div className="dropdown-content">
      <div className="submenu-link" style={{ cursor: 'pointer' }}>
        Careers <span className="arrow">&gt;</span>
      </div>
      <div className="submenu">
        <a href="#" className="submenu-link slide-left">Job Opportunities</a>
        <br /><a href="#" className="submenu-link slide-left">Work at Inteliverse</a>
      </div>
      <div className="submenu-link" style={{ cursor: 'pointer' }}>
        Teams <span className="arrow">&gt;</span>
      </div>
      <div className="submenu">
        <a href="#" className="submenu-link slide-left">Software Development</a>
        <br /><a href="#" className="submenu-link slide-left">Data Engineering</a>
        <br /><a href="#" className="submenu-link slide-left">Machine Learning</a>
        <br /><a href="#" className="submenu-link slide-left">DevOps</a>
        <br /><a href="#" className="submenu-link slide-left">Security</a>
        <br /><a href="#" className="submenu-link slide-left">UX/UI Design</a>
      </div>
    </div>
  </div>
</li>



<li className="contact-us-button">
  <div className="dropdown">
    <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Contact Us</button>
    <div className="dropdown-content">
      <div className="submenu-link" style={{ cursor: 'pointer' }}>
        Use This Form <span className="arrow">&gt;</span>
      </div>
    </div>
  </div>
</li>


{/* Commented out search form and button
<li><a href="#" onClick={toggleSearchForm}><i className="bx bx-search bx-sm" id="search-btn"></i></a></li>
<ul>
  <div className={`search-form ${searchFormActive ? 'active' : ''}`}>
    <input id="search-box" name="search-box" placeholder="search here..." type="search" />
    <label className="bx bx-search bx-sm" htmlFor="search-box"></label>
  </div>
*/}
</ul>
</div>
</div>
);
}
export default Header;


