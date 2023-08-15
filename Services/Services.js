import React from 'react';
import './Services.css';
import BoxIcon from '../icons/BoxIcons'; // Corrected import path

function Services() {
  const words = "Our Teams Work Hard to Offer Clients these Services".split(' ');
  return (
    <section id="services" className="bg-light py-3">
      <div className="wrapper">
        <br />
        <br />
        <br />
        <h2 className="services-heading">
          {words.map((word, index) => (
            <span key={index} style={{ animationDelay: `${0.3 * index}s` }} className="animated-word">
              {word} {index < words.length - 1 && <>&nbsp;</>}
            </span>
          ))}
        </h2>
        <div className="items">
          <div className="item slide-in-item" style={{ backgroundColor: 'lightgreen', animationDelay: '0.3s' }}>
            <BoxIcon iconName="badge-dollar" />
            <h3>Artificial Intelligence & ML.</h3>
            <p>AI Consulting<br /><br />MLOps Consulting</p>
          </div>
          <div className="item slide-in-item" style={{ backgroundColor: 'lightgreen', animationDelay: '0.6s' }}>
            <BoxIcon iconName="building" />
            <h3>Data Engineering</h3>
            <p>Data Engineering Services<br /><br />Big Data Consulting</p>
          </div>
          <div className="item slide-in-item" style={{ backgroundColor: 'lightgreen', animationDelay: '0.9s' }}>
            <BoxIcon iconName="credit-card" />
            <h3>Generative AI</h3>
            <p>Generative AI Development</p>
          </div>
          <div className="item slide-in-item" style={{ backgroundColor: 'lightgreen', animationDelay: '1.2s' }}>
            <BoxIcon iconName="plane" />
            <h3>Enterprise Ready AI Solutions</h3>
            <p>AI tailored for business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

