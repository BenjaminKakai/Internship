import React from 'react';
import './Goal.css';

function Goal() {
  return (
    <div className="goal-container">
      <div className="customer-stories">
        <h1 style={{ color: 'white' }}>Customer Stories</h1>
      </div>
      <div className="slides-container">
        {[...Array(4)].map((_, index) => (
          <div key={index} id="goal" className="goal">
            <div className="goal-img">
              <img src="/images/photo1.jpg" alt="Goal" />
            </div>
            <div className="goal-text">
              <h2>Empowering Through AI</h2>
              <p>Discover the potential of artificial intelligence and how it's revolutionizing industries, enhancing efficiency, and shaping the future.</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
        
        

<div className="goal-text">
    <h2>Empowering Through AI</h2>
    <p>Discover the potential of artificial intelligence and how it's revolutionizing industries, enhancing efficiency, and shaping the future.</p>
    <button className="read-more-btn">Read More</button>
    
    <div className="nav-arrows">
        <span className="arrow left">&lt;</span>
        <span className="arrow right">&gt;</span>
    </div>
</div>


      </div>
    </div>
  );
}

export default Goal;

