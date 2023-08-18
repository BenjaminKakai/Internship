import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';
// Rest of the code...


function Header() {
  const logoPath = '/images/logo.png';
  const [searchFormActive, setSearchFormActive] = useState(false);

  const toggleSearchForm = () => {
    setSearchFormActive(!searchFormActive);
  };

useEffect(() => {
  // Add click event to dropbtn to toggle dropdown content
  document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.querySelector('.dropbtn').addEventListener('click', (e) => {
      let dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      e.stopPropagation();
    });

    // Hide dropdown content when cursor leaves the dropdown area
    dropdown.addEventListener('mouseleave', (e) => {
      let dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
    });
  });

  // Add click event to submenu-link to toggle submenu
  document.querySelectorAll('.submenu-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      let submenu = link.nextElementSibling;
      while (submenu && !submenu.classList.contains('submenu')) {
        submenu = submenu.nextElementSibling;
      }
      let arrow = link.querySelector('.arrow'); // Use 'link' instead of 'e.target'

      // Check if submenu and arrow are found
      if (submenu && arrow) {
        // Toggle submenu display
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

        // Toggle arrow symbol and rotation
        if (submenu.style.display === 'block') {
          arrow.textContent = '-';
          arrow.style.transform = 'rotate(90deg)';
        } else {
          arrow.textContent = '>';
          arrow.style.transform = 'rotate(0deg)';
        }

        // Toggle text color (optional)
        link.style.color = link.style.color === 'red' ? 'black' : 'red';
      }
    });
  });

  // Hide dropdown content when clicking outside of the dropdown area
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-content').forEach((dropdownContent) => {
      dropdownContent.style.display = 'none';
    });
  });
}, []);

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
          
         <li>
  <div className="dropdown">
    <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Home</button>
    <div className="dropdown-content">
      <a href="/" className="submenu-link slide-left">Back to Homepage</a>
    </div>
  </div>
</li>

<li>
  <div className="dropdown">
    <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Services</button>
    <div className="dropdown-content">
      <div className="submenu-link" style={{ cursor: 'pointer' }}>
        Artificial Intelligence & Machine Learning <span className="arrow">&gt;</span>
      </div>
      <div className="submenu">
        <a href="#" className="submenu-link slide-left">AI Consulting</a>
        <br /><a href="#" className="submenu-link slide-left">MLOps Consulting</a>
      </div>
      <div className="submenu-link" style={{ cursor: 'pointer' }}>
        Data Engineering <span className="arrow">&gt;</span>
      </div>
      <div className="submenu">
        <a href="#" className="submenu-link slide-left">Data Engineering Services</a>
        <br /><a href="#" className="submenu-link slide-left">Big Data Consulting</a>
      </div>
      <div className="submenu-link" style={{ cursor: 'pointer' }}>
        Generative AI <span className="arrow">&gt;</span>
      </div>
      <div className="submenu">
        <a href="#" className="submenu-link slide-left">AI Development</a>
        <br /><a href="#" className="submenu-link slide-left">Enterprise Ready Solutions</a>
      </div>
    </div>
  </div>
</li>

<li>
  <div className="dropdown">
    <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Portfolio</button>
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
    <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Teams</button>
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
        <a href="#" className="submenu-link slide-left">Data Engineering</a>
        <a href="#" className="submenu-link slide-left">Machine Learning</a>
        <a href="#" className="submenu-link slide-left">DevOps</a>
        <br /><a href="#" className="submenu-link slide-left">Security</a>
        <br /><a href="#" className="submenu-link slide-left">UX/UI Design</a>
      </div>
    </div>
</div>
</li>



<li>
  <div className="dropdown">
    <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Blog</button>
    <div className="dropdown-content">
      <div className="submenu-link slide-left">
        Latest Blogs on Data Analytics and AI <span className="arrow">&gt;</span>
      </div>
    </div>
  </div>
</li>

          
          <li><a href="#" onClick={toggleSearchForm}><i className="bx bx-search bx-sm" id="search-btn"></i></a></li> {/* Added search button */}
        </ul>
        <div className={`search-form ${searchFormActive ? 'active' : ''}`}> {/* Added search form */}
          <input id="search-box" name="search-box" placeholder="search here..." type="search" />
          <label className="bx bx-search bx-sm" htmlFor="search-box"></label>
        </div>
      </div>
    </div>
  );
}

export default Header;

