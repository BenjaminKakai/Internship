import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
//import Showcase from './Showcase/Showcase'; // Commented out Showcase import
import Services from './Services/Services';
import Goal from './Goal/Goal';
import Portfolio from './Portfolio/Portfolio';
import Teams from './Teams/Teams';
import Blog from './Blog /Blog'; // Notice the space after "Blog"
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home'; // Imported Home component

import NavigationBar from './NavigationBar/NavigationBar';

import './index.css';

function App() {
  const [isNavbarSticky, setNavbarSticky] = useState(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarSticky(window.scrollY > 5);
      setShowScrollUpBtn(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
    <Header sticky={isNavbarSticky} />
   <Home /> 
     <Services />
     
      <Goal /> 
      <Portfolio />
     <Teams />
      <Blog />
      <Contact />
      <Footer />
      
     {/* <MainNavigationBar /> {/* Add this line */}
      {showScrollUpBtn && <button className="scroll-up-btn" onClick={scrollToTop}>Scroll Up</button>}
    </div>
  );
}

export default App;
