import React from 'react';
import './Contact.css';

function Contact() {
  const scrollToFooter = () => {
    const footer = document.querySelector('.footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact" onClick={scrollToFooter} style={{ height: '0px', cursor: 'pointer' }}></section>
  );
}

export default Contact;

