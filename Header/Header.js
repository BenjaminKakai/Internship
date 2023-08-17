import React, { useEffect, useState } from 'react';
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';



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
        let arrow = e.target.querySelector('.arrow');

        // Check if submenu and arrow are found
        if (submenu && arrow) {
          // Toggle submenu display
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

          // Toggle arrow symbol
          arrow.textContent = arrow.textContent === '>' ? '-' : '>';

          // Toggle text color
          e.target.style.color = e.target.style.color === 'red' ? 'black' : 'red';
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
                <a href="#" className="submenu-link">Services <span className="arrow">&gt;</span></a><br />
                <a href="#" className="submenu-link">Portfolio <span className="arrow">&gt;</span></a><br />
                <a href="#" className="submenu-link">Teams <span className="arrow">&gt;</span></a><br />
                <a href="#" className="submenu-link">Blog <span className="arrow">&gt;</span></a><br />
                <a href="#" className="submenu-link">Contact <span className="arrow">&gt;</span></a>
              </div>
            </div>
          </li>
          <li>
          
            <div className="dropdown">
              <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Services</button>
              <div className="dropdown-content">
                <a href="#" className="submenu-link">Artificial Intelligence & Machine Learning <span className="arrow">&gt;</span></a>
                <div className="submenu">
                    <a href="#">AI Consulting</a>
                    <br /><a href="#">MLOps Consulting</a>
                </div>
                <div><a href="#" className="submenu-link">Data Engineering <span className="arrow">&gt;</span></a>
                <div className="submenu">
                    <a href="#">Data Engineering Services<br /></a>
                    <br /><a href="#">Big Data Consulting<br /></a>
                </div>
                </div>
                <a href="#" className="submenu-link">Generative AI <span className="arrow">&gt;</span></a>
                <div className="submenu">
                    <a href="#">AI Development</a>
                    <br /><a href="#">Enterprise Ready Solutions</a>
                </div>
              </div>
            </div>
          </li>
          
          <li>
            <div className="dropdown">
              <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Portfolio</button>

              <div className="dropdown-content">
                <div><a href="#" className="submenu-link">Solutions<span className="arrow">&gt;</span></a>
                <div className="submenu">
                    <a href="#">Manufacturing</a>
                    <br /><a href="#">Retail</a>
                    <br /><a href="#">Technology Companies</a>
                    <br /><a href="#">Finance Insurance</a>
                </div>
                </div>
               <div> <a href="#" className="submenu-link">Technologies <span className="arrow">&gt;</span></a>
                <div className="submenu">
                    <a href="#">Computer Vision Solutions</a>
                    <br /><a href="#">NLP</a>
                    </div>
                </div>
              </div>
            </div>
          </li>
          
          <li>
            <div className="dropdown">
              <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Teams</button>

              <div className="dropdown-content">
                <a href="#" className="submenu-link">Careers <span className="arrow">&gt;</span></a>
                <div className="submenu">
                    <a href="#">Check Job Opportunities and Join Us</a>
                    <br /><a href="#">Learn More About How It Is to Work with Inteliverse</a>
                </div>
                <div><a href="#" className="submenu-link">Professionals at Inteliverse <span className="arrow">&gt;</span></a>
                <div className="submenu">
                    <a href="#">Software Development Teams</a>
                    <br /><a href="#">Data Engineering Teams</a>
                    <br /><a href="#">Machine Learning Team</a>
                    <br /><a href="#">DevOps Team</a>
                    <br /><a href="#">Security Team</a>
                    <br /><a href="#">User Experience and User Interface Design Team</a>
                    </div>
                </div>
              </div>
            </div>
        </li>
          
                    <li>
            <div className="dropdown">
              <button className="dropbtn" style={{ backgroundColor: 'lightgrey', color: 'black' }}>Blog</button>

              <div className="dropdown-content">
                <a href="#" className="submenu-link">Data Analytics <span className="arrow">&gt;</span></a>
                <a href="#" className="submenu-link">Data-Driven Revenue <span className="arrow">&gt;</span></a>
                <a href="#" className="submenu-link">Data-Driven Revenue <span className="arrow">&gt;</span></a>
                <a href="#" className="submenu-link">Growth Insights for the Retail Industry <span className="arrow">&gt;</span></a>
                <div className="submenu">
                  <a href="#"></a>
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

