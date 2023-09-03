import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../boxicons-2.0.9/css/boxicons.min.css';
import './Header.css';
import './headerservices.css';
import './ResponsiveHeader.css';

function Header() {
  const logoPath = '/images/logo.png';
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const [clickedItem, setClickedItem] = useState(null);

  // Declare the showSubItems state
  const [showSubItems, setShowSubItems] = useState({});

  // Handle item click to toggle sub-items
  const handleItemClick = (item) => {
    setClickedItem(item);
    const newShowSubItems = { ...showSubItems };
    newShowSubItems[item] = !newShowSubItems[item];
    setShowSubItems(newShowSubItems);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbarBottom = document.querySelector('.navbar-bottom');
      const navbarTop = document.querySelector('.navbar-top');

      navbarTop.style.backgroundColor = '#ffffff';

      if (window.scrollY > 0) {
        navbarBottom.style.backgroundColor = '#ffffff';
      } else {
        navbarBottom.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (contentType) => {
    if (activeDropdown) {
      document.querySelector(`.${activeDropdown}-content`).style.display = 'none';
    }

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
      dropdownContent.style.display = 'grid';
    }

    setActiveDropdown(contentType);
  };

  const handleMouseLeave = (e, contentType) => {
    // Do nothing on mouse leave
  };

  const handleNavbarMouseLeave = () => {
    if (activeDropdown) {
      document.querySelector(`.${activeDropdown}-content`).style.display = 'none';
      const navbarBottom = document.querySelector('.navbar-bottom');
      navbarBottom.style.backgroundColor = 'transparent';
      setActiveDropdown(null);
    }
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);


  
  
  return (
<div className="showcase">
  <div className="navbar-container" onMouseLeave={handleNavbarMouseLeave}>
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
            <button 
                className="dropbtn" 
                style={{ fontWeight: 'bold', backgroundColor: '', color: 'black' }} 
                onMouseOver={(e) => e.currentTarget.style.color = 'lightgreen'} 
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
            >
                Services
            </button>
            <div className="services-pipe" style={{ height: '0px', width: '2px', backgroundColor: 'lightgreen', transition: 'height 0.3s', overflow: 'hidden' }}></div>
            <div className="services-underline" style={{ display: 'none', height: '2px', backgroundColor: 'green', width: '100%', marginTop: '2px' }}></div>
            <div
                className="dropdown-content services-content extended-dropdown"
                style={{
                    display: 'none', // Hide initially
                    gridTemplateColumns: '1fr 1fr 1fr', // Three columns
                }}
            >
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Artificial Intelligence & ML</h3>
                    <a href="#" className="submenu-link slide-left">AI Consulting</a>
                    <a href="#" className="submenu-link slide-left">MLOps Consulting</a>
                </div>
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Data Engineering</h3>
                    <a href="#" className="submenu-link slide-left">Data Engineering Services</a>
                    <a href="#" className="submenu-link slide-left">Big Data Consulting</a>
                </div>
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Generative AI</h3>
                    <a href="#" className="submenu-link slide-left">Generative AI Development <br />Company</a>
                </div>
            </div>
            <div className="extended-dropdown" style={{ display: 'none' }}>
                {/* ... Extended Content ... */}
            </div>
        </div>
    </li>
</div> {/* Closing div tag for navbar-wrapper */}






<div className="navbar-wrapper">
    <li>
        <div
            className="dropdown portfolio-dropdown"
            onMouseEnter={() => handleMouseEnter('portfolio')}
            onMouseLeave={(e) => handleMouseLeave(e, 'portfolio')}
        >
            <button 
                className="dropbtn" 
                style={{ fontWeight: 'bold', backgroundColor: '', color: 'black' }} 
                onMouseOver={(e) => e.currentTarget.style.color = 'lightgreen'} 
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
            >
                Portfolio
            </button>
            <div className="portfolio-pipe" style={{ height: '0px', width: '2px', backgroundColor: 'lightgreen', transition: 'height 0.3s', overflow: 'hidden' }}></div>
            <div
                className="dropdown-content portfolio-content extended-dropdown"
                style={{
                    display: 'none', // Hide initially
                    gridTemplateColumns: '1fr 1fr 1fr', // Three columns
                }}
            >
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Technologies</h3>
                    <img src="/images/Computer Vision Solution.jpg" alt="Computer Vision Solution" style={{ width: '300px', height: '100px' }} />
                    <a href="#" className="submenu-link slide-left">Computer Vision Solutions</a>
                    <img src="/images/NLPP.jpg" alt="NLP Solution" style={{ width: '300px', height: '100px' }} />
                    <a href="#" className="submenu-link slide-left">NLP Solutions</a>
                </div>

                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Industries</h3>
                    <a href="#" className="submenu-link slide-left">Manufacturing</a>
                    <a href="#" className="submenu-link slide-left">Retail</a>
                    <a href="#" className="submenu-link slide-left">Finance & Insurance</a>
                    <a href="#" className="submenu-link slide-left">Logistics</a>
                    <a href="#" className="submenu-link slide-left">Aviation</a>
                    <a href="#" className="submenu-link slide-left">Technology Company</a>
                </div>

                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Case Studies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" style={{ color: 'lightgreen' }}>all case studies</a></h3>
                    <a href="#" className="submenu-link slide-left">Upgrading AI into the production- <br /> ready stage with microservice- <br /> based MLOps</a>
                    <a href="#" className="submenu-link slide-left">Audit and future-proof, <br />scaleable dataflows</a>
                    <a href="#" className="submenu-link slide-left">Teezly <br /> Automated image quality <br /> detection engine for retail</a>
                    <a href="#" className="submenu-link slide-left">Unified Supply Chain Management</a>
                </div>
            </div>
        </div>
    </li>
</div> {/* Closing div tag for navbar-wrapper */}

            
          
  <div className="navbar-wrapper">
  <li>
    <div className="dropdown"
         onMouseEnter={() => {
           // Hide any active dropdown immediately
           if (activeDropdown) {
             document.querySelector(`.${activeDropdown}-content`).style.display = 'none';
           }
           
           document.querySelector('.navbar-bottom').style.backgroundColor = 'transparent';
           document.querySelector('.resources-button').style.color = 'lightgreen';
         }}
         onMouseLeave={() => {
           document.querySelector('.navbar-bottom').style.backgroundColor = 'transparent'; // Reset to transparent.
           document.querySelector('.resources-button').style.color = 'black';
         }}
    >
      <a href="/resources" className="dropbtn resources-button" style={{ backgroundColor: '', color: 'black' }}>
        Resources
      </a>
      <div className="dropdown-content resources-dropdown-content" style={{ display: 'none' }}>
        <div className="submenu-link slide-left">
          Latest Blogs on Data Analytics and AI <span className="arrow">&gt;</span>
        </div>
      </div>
    </div>
  </li>
</div> {/* Closing div tag for navbar-wrapper */}





<div className="navbar-wrapper">
  <li>
    <div className="dropdown"
         onMouseEnter={() => {
           // Hide any active dropdown immediately
           if (activeDropdown) {
             document.querySelector(`.${activeDropdown}-content`).style.display = 'none';
           }
           
           document.querySelector('.navbar-bottom').style.backgroundColor = 'transparent';
           document.querySelector('.blog-button').style.color = 'lightgreen';
         }}
         onMouseLeave={() => {
           document.querySelector('.navbar-bottom').style.backgroundColor = 'transparent'; // Reset to transparent.
           document.querySelector('.blog-button').style.color = 'black';
         }}
    >
      <a href="/blog" className="dropbtn blog-button" style={{ backgroundColor: '', color: 'black' }}>
        Blog
      </a>
      <div className="dropdown-content blog-dropdown-content" style={{ display: 'none' }}>
        <div className="submenu-link slide-left">
          Latest Blogs on Data Analytics and AI <span className="arrow">&gt;</span>
        </div>
      </div>
    </div>
  </li>
</div>




<div className="navbar-wrapper">
    <li>
        <div
            className="dropdown teams-dropdown"
            onMouseEnter={() => handleMouseEnter('teams')}
            onMouseLeave={(e) => handleMouseLeave(e, 'teams')}
        >
            <button 
                className="dropbtn" 
                style={{ fontWeight: 'bold', backgroundColor: '', color: 'black' }} 
                onMouseOver={(e) => e.currentTarget.style.color = 'lightgreen'} 
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
            >
                Teams
            </button>
            <div className="teams-pipe" style={{ height: '0px', width: '2px', backgroundColor: 'lightgreen', transition: 'height 0.3s', overflow: 'hidden' }}></div>
            <div
                className="dropdown-content teams-content extended-dropdown"
                style={{ display: 'none' }}
            >
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Career</h3>
                    <a href="#" className="submenu-link slide-left" style={{ width: '500px', display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="/images/check job opportunities.jpg" 
                            alt="Check job opportunities" 
                            style={{ width: '100px', height: '70px', marginRight: '10px' }} 
                        />
                        Check job opportunities <br />and join us
                    </a>
                </div>
                <div className="column" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Meet us</h3>
                    <a href="#" className="submenu-link slide-left" style={{ width: '300px', display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="/images/learn more about.jpg" 
                            alt="Learn more about Inteliverse" 
                            style={{ width: '100px', height: '70px', marginRight: '10px' }} 
                        />
                        Learn more about how it is <br /> to work at Inteliverse
                    </a>
                </div>
            </div>
        </div>
    </li>
</div> {/* Closing div tag for navbar-wrapper */}



    

<div className="navbar-wrapper">
    <li className="contact-us-button">
        <div className="dropdown">
            <Link 
                to="/contact" 
                className="dropbtn"
                style={{ 
                    backgroundColor: 'green',  // Start with a green background
                    color: 'black',
                    borderRadius: '10px',
                    transition: 'background-color 0.3s',
                    whiteSpace: 'nowrap',
                    height: '30px',
                    paddingTop: '20px',
                    paddingBottom: '5px',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgreen'}  // Transition to light green when hovered
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'green'}  // Transition back to green when not hovered
            >
                Contact Us
            </Link>
            <div className="dropdown-content">
                <div className="submenu-link" style={{ cursor: 'pointer' }}>
                    Use This Form <span className="arrow">&gt;</span>
                </div>
            </div>
        </div>
    </li>
</div> {/* Closing div tag for navbar-wrapper */}




<div>
  {/* ... other components */}
  {isSmallScreen && (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} ref={dropdownRef}>
      <button className="responsive-button" onClick={toggleDropdown} style={{ marginTop: '20px' }}>
        {isDropdownVisible ? '✕' : '☰'}
      </button>
      {isDropdownVisible && (
        <div className="responsive-dropdown dropdown-box">
          <ul className="simple-dropdown-list">
            {/* Services Dropdown */}
            <li>
              <div onClick={() => handleItemClick('services')}>
                <a href="#" className={clickedItem === 'services' ? 'active' : ''}>Services<span className="toggle-icon">{showSubItems['services'] ? '-' : '>'}</span></a>
              </div>
              {showSubItems['services'] && (
                <ul className={`sub-list ${showSubItems['services'] ? 'show' : ''}`}>
                  {/* Service 1 */}
                  <li>
                    <div onClick={() => handleItemClick('service1')}>
                      <a href="#" className={clickedItem === 'service1' ? 'active' : ''}>Service 1<span className="toggle-icon">{showSubItems['service1'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['service1'] && (
                      <ul className={`sub-list ${showSubItems['service1'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-service 1</a></li>
                        <li><a href="#">Sub-service 2</a></li>
                      </ul>
                    )}
                  </li>
                  {/* Service 2 */}
                  <li>
                    <div onClick={() => handleItemClick('service2')}>
                      <a href="#" className={clickedItem === 'service2' ? 'active' : ''}>Service 2<span className="toggle-icon">{showSubItems['service2'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['service2'] && (
                      <ul className={`sub-list ${showSubItems['service2'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-service 1</a></li>
                        <li><a href="#">Sub-service 2</a></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            {/* Portfolio Dropdown */}
            <li>
              <div onClick={() => handleItemClick('portfolio')}>
                <a href="#" className={clickedItem === 'portfolio' ? 'active' : ''}>Portfolio<span className="toggle-icon">{showSubItems['portfolio'] ? '-' : '>'}</span></a>
              </div>
              {showSubItems['portfolio'] && (
                <ul className={`sub-list ${showSubItems['portfolio'] ? 'show' : ''}`}>
                  {/* Portfolio 1 */}
                  <li>
                    <div onClick={() => handleItemClick('portfolio1')}>
                      <a href="#" className={clickedItem === 'portfolio1' ? 'active' : ''}>Portfolio 1<span className="toggle-icon">{showSubItems['portfolio1'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['portfolio1'] && (
                      <ul className={`sub-list ${showSubItems['portfolio1'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-portfolio 1</a></li>
                        <li><a href="#">Sub-portfolio 2</a></li>
                      </ul>
                    )}
                  </li>
                  {/* Portfolio 2 */}
                  <li>
                    <div onClick={() => handleItemClick('portfolio2')}>
                      <a href="#" className={clickedItem === 'portfolio2' ? 'active' : ''}>Portfolio 2<span className="toggle-icon">{showSubItems['portfolio2'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['portfolio2'] && (
                      <ul className={`sub-list ${showSubItems['portfolio2'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-portfolio 1</a></li>
                        <li><a href="#">Sub-portfolio 2</a></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            {/* Resources Dropdown */}
            <li>
              <div onClick={() => handleItemClick('resources')}>
                <a href="#" className={clickedItem === 'resources' ? 'active' : ''}>Resources<span className="toggle-icon">{showSubItems['resources'] ? '-' : '>'}</span></a>
              </div>
              {showSubItems['resources'] && (
                <ul className={`sub-list ${showSubItems['resources'] ? 'show' : ''}`}>
                  {/* Resource 1 */}
                  <li>
                    <div onClick={() => handleItemClick('resource1')}>
                      <a href="#" className={clickedItem === 'resource1' ? 'active' : ''}>Resource 1<span className="toggle-icon">{showSubItems['resource1'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['resource1'] && (
                      <ul className={`sub-list ${showSubItems['resource1'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-resource 1</a></li>
                        <li><a href="#">Sub-resource 2</a></li>
                      </ul>
                    )}
                  </li>
                  {/* Resource 2 */}
                  <li>
                    <div onClick={() => handleItemClick('resource2')}>
                      <a href="#" className={clickedItem === 'resource2' ? 'active' : ''}>Resource 2<span className="toggle-icon">{showSubItems['resource2'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['resource2'] && (
                      <ul className={`sub-list ${showSubItems['resource2'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-resource 1</a></li>
                        <li><a href="#">Sub-resource 2</a></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            {/* Blog Dropdown */}
            <li>
              <div onClick={() => handleItemClick('blog')}>
                <a href="#" className={clickedItem === 'blog' ? 'active' : ''}>Blog<span className="toggle-icon">{showSubItems['blog'] ? '-' : '>'}</span></a>
              </div>
              {showSubItems['blog'] && (
                <ul className={`sub-list ${showSubItems['blog'] ? 'show' : ''}`}>
                  {/* Blog 1 */}
                  <li>
                    <div onClick={() => handleItemClick('blog1')}>
                      <a href="#" className={clickedItem === 'blog1' ? 'active' : ''}>Blog 1<span className="toggle-icon">{showSubItems['blog1'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['blog1'] && (
                      <ul className={`sub-list ${showSubItems['blog1'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-blog 1</a></li>
                        <li><a href="#">Sub-blog 2</a></li>
                      </ul>
                    )}
                  </li>
                  {/* Blog 2 */}
                  <li>
                    <div onClick={() => handleItemClick('blog2')}>
                      <a href="#" className={clickedItem === 'blog2' ? 'active' : ''}>Blog 2<span className="toggle-icon">{showSubItems['blog2'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['blog2'] && (
                      <ul className={`sub-list ${showSubItems['blog2'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-blog 1</a></li>
                        <li><a href="#">Sub-blog 2</a></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            {/* Teams Dropdown */}
            <li>
              <div onClick={() => handleItemClick('teams')}>
                <a href="#" className={clickedItem === 'teams' ? 'active' : ''}>Teams<span className="toggle-icon">{showSubItems['teams'] ? '-' : '>'}</span></a>
              </div>
              {showSubItems['teams'] && (
                <ul className={`sub-list ${showSubItems['teams'] ? 'show' : ''}`}>
                  {/* Team 1 */}
                  <li>
                    <div onClick={() => handleItemClick('team1')}>
                      <a href="#" className={clickedItem === 'team1' ? 'active' : ''}>Team 1<span className="toggle-icon">{showSubItems['team1'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['team1'] && (
                      <ul className={`sub-list ${showSubItems['team1'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-team 1</a></li>
                        <li><a href="#">Sub-team 2</a></li>
                      </ul>
                    )}
                  </li>
                  {/* Team 2 */}
                  <li>
                    <div onClick={() => handleItemClick('team2')}>
                      <a href="#" className={clickedItem === 'team2' ? 'active' : ''}>Team 2<span className="toggle-icon">{showSubItems['team2'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['team2'] && (
                      <ul className={`sub-list ${showSubItems['team2'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-team 1</a></li>
                        <li><a href="#">Sub-team 2</a></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            {/* Contact Us Dropdown */}
            <li>
              <div onClick={() => handleItemClick('contactUs')}>
                <a href="#" className={clickedItem === 'contactUs' ? 'active' : ''}>Contact Us<span className="toggle-icon">{showSubItems['contactUs'] ? '-' : '>'}</span></a>
              </div>
              {showSubItems['contactUs'] && (
                <ul className={`sub-list ${showSubItems['contactUs'] ? 'show' : ''}`}>
                  {/* Contact 1 */}
                  <li>
                    <div onClick={() => handleItemClick('contact1')}>
                      <a href="#" className={clickedItem === 'contact1' ? 'active' : ''}>Contact 1<span className="toggle-icon">{showSubItems['contact1'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['contact1'] && (
                      <ul className={`sub-list ${showSubItems['contact1'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-contact 1</a></li>
                        <li><a href="#">Sub-contact 2</a></li>
                      </ul>
                    )}
                  </li>
                  {/* Contact 2 */}
                  <li>
                    <div onClick={() => handleItemClick('contact2')}>
                      <a href="#" className={clickedItem === 'contact2' ? 'active' : ''}>Contact 2<span className="toggle-icon">{showSubItems['contact2'] ? '-' : '>'}</span></a>
                    </div>
                    {showSubItems['contact2'] && (
                      <ul className={`sub-list ${showSubItems['contact2'] ? 'show' : ''}`}>
                        <li><a href="#">Sub-contact 1</a></li>
                        <li><a href="#">Sub-contact 2</a></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  )}
</div>










    


</ul>
</div>
</div>
</div>
);
}

export default Header;
