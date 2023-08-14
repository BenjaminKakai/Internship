import React from 'react';
import './Services.css';

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
          <div className="item">
            <i className="bx bxs-badge-dollar bx-lg"></i>
            <h3>Artificial Intelligence & ML.</h3>
            <p>AI Consulting<br /><br />MLOps Consulting</p>
          </div>
          <div className="item">
            <i className="bx bxs-building-house bx-lg"></i>
            <h3>Data Engineering</h3>
            <p>Data Engineering Services<br /><br />Big Data Consulting</p>
          </div>
          <div className="item">
            <i className="bx bxs-credit-card-front bx-lg"></i>
            <h3>Generative AI</h3>
            <p>Generative AI Development</p>
          </div>
          <div className="item">
            <i className="bx bxs-plane-alt bx-lg"></i>
            <h3>Enterprise Ready AI Solutions</h3>
            <p>AI tailored for business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

