import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="bg-light py-3">
      <div className="wrapper">
        <h2 className="services-heading"><b>Our <br />Teams Work Hard to <br />Offer Clients the Services Below</b></h2>
        <div className="items">
          <div className="item">
            <i className="bx bxs-badge-dollar bx-lg"></i>
            <h3>Drive Changes Through AI & Data.</h3>
            <p>Empowering innovation with AI.</p>
          </div>
          <div className="item">
            <i className="bx bxs-building-house bx-lg"></i>
            <h3>Build Enterprise Ready AI Solutions.</h3>
            <p>Your path to AI success.</p>
          </div>
          <div className="item">
            <i className="bx bxs-credit-card-front bx-lg"></i>
            <h3>Data Analysis for Effective Decision Making.</h3>
            <p>Analytics for smart decisions.</p>
          </div>
          <div className="item">
            <i className="bx bxs-plane-alt bx-lg"></i>
            <h3>Including Artificial Intelligence in Businesses.</h3>
            <p>AI tailored for business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

