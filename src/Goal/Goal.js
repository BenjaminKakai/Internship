import React from 'react';
import './Goal.css';

function Goal() {
  return (
    <div id="goal" className="goal">
      <div className="goal-img">
        <img src="/images/photo1.jpg" alt="Goal" />
      </div>
      <div className="goal-text">
        <a href="#">Our Priorities</a>
        <h2>Driving Changes Through AI &amp; <br /> Data</h2>
        <div className="contents">
          <div className="content p-4">
            <i className="bx bx-check bx-sm"></i>
            <h3>Driving Changes Through AI &amp; Data</h3>
            <p>Empowering innovation with AI.</p>
            <p>Revolutionize with data insights.</p>
          </div>
          <div className="content p-4">
            <i className="bx bx-check bx-sm"></i>
            <h3>Advanced Analytics for Effective &amp; Decision Making</h3>
<p>Analytics for smart decisions.</p>
            <p>Drive results with data.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Goal;

