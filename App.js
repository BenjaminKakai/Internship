import React from 'react';
import NavbarTop from './NavbarTop/NavbarTop';
import NavbarBottom from './NavbarBottom/NavbarBottom';
import ShowcaseContent from './ShowcaseContent/ShowcaseContent';
import Services from './Services/Services';
import Goal from './Goal/Goal';
import Portfolio from './Portfolio/Portfolio';
import Teams from './Teams/Teams';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <ShowcaseContent />
      <Services />
      <Goal />
      <Portfolio />
      <Teams />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;