import React from 'react';
import './Goal.css';

function Goal() {
  return (
    <div id="goal" className="goal">
      <div className="goal-img">
        <img src="/images/photo1.jpg" alt="Goal" />
      </div>
      <div className="goal-text">
        <a href="#"><b>Read More About Our Priorities Below</b></a><br /><br />
        <div className="contents">
          <div className="content p-4">
            <div className="title-with-icon">
              <i className="bx bx-check bx-sm"></i>
              <h3>Driving Changes Through AI &amp; Data</h3><br /><br /> 
            </div>
            <button onClick={() => window.open('https://intelliverseai.com/data-analytics-consulting-services/')}>Empowering innovation with AI.</button>
            <button onClick={() => window.open('https://intelliverseai.com/data-analytics-consulting-services/')}>Revolutionize with data insights.</button><br />
          </div>
          <div className="content p-4">
            <div className="title-with-icon">
              <i className="bx bx-check bx-sm"></i>
              <h3>Building Enterprise Ready AI Solutions</h3><br />
            </div>
            <button onClick={() => window.open('https://intelliverseai.com/data-analytics-consulting-services/')}>Analytics for smart decisions.</button>
            <button onClick={() => window.open('https://intelliverseai.com/data-analytics-consulting-services/')}>Drive results with data.</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;

