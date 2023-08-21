import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';
import './headerservices.css'; 
// Rest of the code...

function Header() {
  const logoPath = '/images/logo.png';
  let hideDropdownTimeout;

  const handleMouseEnter = (contentType) => {
    clearTimeout(hideDropdownTimeout); // Clear timeout if exists

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

  const handleMouseLeave = (e, contentType) => {
    hideDropdownTimeout = setTimeout(() => {
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
        // Hide the extended dropdown as well
        const extendedDropdown = document.querySelector('.extended-dropdown');
        if (extendedDropdown) {
          extendedDropdown.style.display = 'none'; // Hide
        }
      }
    }, 3000); // 3 seconds delay
  };
    
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
          {/* ... other menu items ... */}
          <div className="navbar-wrapper">
            <li>
              <div
                className="dropdown services-dropdown"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={(e) => handleMouseLeave(e, 'services')}
              >
                <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Services</button>
                <div
                  className="dropdown-content services-content extended-dropdown"
                  style={{
                    display: 'none', // Hide initially
                    gridTemplateColumns: '1fr 1fr 1fr', // Three columns
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
                <div className="extended-dropdown" style={{ display: 'none' }}>
                  {/* ... Extended Content ... */}
                </div>
              </div>
            </li>
          </div> {/* Closing div tag for navbar-wrapper */}



 <li>
              <div
                className="dropdown portfolio-dropdown"
                onMouseEnter={() => handleMouseEnter('portfolio')}
                onMouseLeave={(e) => handleMouseLeave(e, 'portfolio')}
              >
                <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Portfolio</button>
                <div
                  className="dropdown-content portfolio-content extended-dropdown"
                  style={{
                    display: 'none', // Hide initially
                    gridTemplateColumns: '1fr 1fr 1fr', // Three columns
                  }}
                >
                  <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Solutions</h3>
                    <a href="#" className="submenu-link slide-left">Manufacturing</a>
                    <a href="#" className="submenu-link slide-left">Retail</a>
                    <a href="#" className="submenu-link slide-left">Technology</a>
                    <a href="#" className="submenu-link slide-left">Finance and Insurance</a>
                  </div>
                  <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Technologies</h3>
                    <a href="#" className="submenu-link slide-left">Computer Vision Solutions</a>
                    <a href="#" className="submenu-link slide-left">NLP</a>
                  </div>
                  {/* ... Additional content for the Portfolio ... */}
                </div>
                <div className="extended-dropdown" style={{ display: 'none' }}>
                  {/* ... Extended Content ... */}
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
              <div className="dropdown teams-dropdown"
                    onMouseEnter={() => handleMouseEnter('teams')}
                    onMouseLeave={(e) => handleMouseLeave(e, 'teams')}>
                <button className="dropbtn" style={{ backgroundColor: '', color: 'black' }}>Teams</button>
                <div className="dropdown-content teams-content extended-dropdown" style={{ display: 'none' }}>
                  {/* ... Teams Content ... */}
                  <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Careers</h3>
                    <a href="#" className="submenu-link slide-left">Job Opportunities</a>
                    <a href="#" className="submenu-link slide-left">Work at Inteliverse</a>
                  </div>
                  <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Teams</h3>
                    <a href="#" className="submenu-link slide-left">Software Development</a>
                    <a href="#" className="submenu-link slide-left">Data Engineering</a>
                    <a href="#" className="submenu-link slide-left">Machine Learning</a>
                    <a href="#" className="submenu-link slide-left">DevOps</a>
                    <a href="#" className="submenu-link slide-left">Security</a>
                    <a href="#" className="submenu-link slide-left">UX/UI Design</a>
                  </div>
                </div>
                <div className="extended-dropdown" style={{ display: 'none' }}>
                  {/* ... Extended Content ... */}
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


