import React from 'react';
import './Teams.css';
import '../boxicons-2.0.9/css/boxicons.min.css'; // Updated path

function Teams() {
  const centerStyle = {
    textAlign: 'center',
  };

  return (
    <div id="teams" className="bg-light py-3">
      <div style={centerStyle}>
        <h3>We are there for you</h3>
        <h2>Meet Our Professional Team</h2>
        <p>We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be</p>
      </div>
      <div className="wrapper">
        <div className="card-items">
          <div className="card">
            <div className="card-header">
              <img src="/images/cynthia.jpg" alt="Cynthia Spears" />
            </div>
            <div className="card-body">
              <h3>Cynthia Spears</h3>
              <h4>Chief Communication Officer</h4>
              <ul>
                <li><i className="bx bxl-twitter"></i></li>
                <li><i className="bx bxl-facebook"></i></li>
                <li><i className="bx bxl-instagram"></i></li>
                <li><i className="bx bxl-linkedin"></i></li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/kevin.jpg" alt="Peter Riley" />
            </div>
            <div className="card-body">
              <h3>Peter Riley</h3>
              <h4>Chief Executive Officer</h4>
              <ul>
                <li><i className="bx bxl-twitter"></i></li>
                <li><i className="bx bxl-facebook"></i></li>
                <li><i className="bx bxl-instagram"></i></li>
                <li><i className="bx bxl-linkedin"></i></li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/augusta.jpg" alt="Marry Clark" />
            </div>
            <div className="card-body">
              <h3>Marry Clark</h3>
              <h4>Chief Operating Officer</h4>
              <ul>
                <li><i className="bx bxl-twitter"></i></li>
                <li><i className="bx bxl-facebook"></i></li>
                <li><i className="bx bxl-instagram"></i></li>
                <li><i className="bx bxl-linkedin"></i></li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/vera.jpg" alt="Mary Kimani" />
            </div>
            <div className="card-body">
              <h3>Mary Kimani</h3>
              <h4>Chief Technology Officer</h4>
              <ul>
                <li><i className="bx bxl-twitter"></i></li>
                <li><i className="bx bxl-facebook"></i></li>
                <li><i className="bx bxl-instagram"></i></li>
                <li><i className="bx bxl-linkedin"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;

