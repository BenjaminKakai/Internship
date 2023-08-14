import React from 'react';
import './Teams.css';
import '../boxicons-2.0.9/css/boxicons.min.css';

function Teams() {
  const centerStyle = {
    textAlign: 'center',
  };

  return (
    <div id="teams" className="bg-light py-3">
      <div style={centerStyle}>
        <br />
        <h2>Meet Our Professional Teams</h2>
        <p>We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be</p>
      </div>
      <div className="wrapper">
        <div className="card-items">
          <div className="card">
            <div className="card-header">
              <img src="/images/cynthia.jpg" alt="Software Development Team" />
            </div>
            <div className="card-body">
              <h3>Software Development Team</h3>
              {/* Other information can be updated as needed */}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/kevin.jpg" alt="Machine Learning Team" />
            </div>
            <div className="card-body">
              <h3>Machine Learning Team</h3>
              {/* Other information can be updated as needed */}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/augusta.jpg" alt="Data Engineering Team" />
            </div>
            <div className="card-body">
              <h3>Data Engineering Team</h3>
              {/* Other information can be updated as needed */}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/vera.jpg" alt="DevOps Team" />
            </div>
            <div className="card-body">
              <h3>DevOps Team</h3>
              {/* Other information can be updated as needed */}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/cynthia.jpg" alt="Security Team" />
            </div>
            <div className="card-body">
              <h3>Security Team</h3>
              {/* Other information can be updated as needed */}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/kevin.jpg" alt="User Experience and User Interface Team (UI/UX)" />
            </div>
            <div className="card-body">
              <h3>User Experience and User Interface Team (UI/UX)</h3>
              {/* Other information can be updated as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;

