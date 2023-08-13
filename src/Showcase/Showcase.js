import React from "react";
import homeVideo from "../home video.mp4"; // Corrected path
import './Showcase.css';

const Showcase = () => {
  return (
    <div className="showcase">
      <video className="background-video" id="background-video" autoPlay loop muted>
        <source src={homeVideo} type="video/mp4" />
      </video>
      <div className="navbar-top">
        {/* Add navbar top content here */}
      </div>
      <div className="navbar-bottom">
        {/* Add navbar bottom content here */}
      </div>
      <div className="showcase-content">
        <h1>
          Driving changes <br /> through AI &amp; Data <span>&amp; Solutions</span>
        </h1>
        <p>
          We help enterprises build custom AI Solutions<br /> and Growth Stage Companies seeking to maximize results
        </p>
        <a className="btn btn-left" href="#">
          EXPLORE MORE
        </a>
        <a className="btn btn-right" href="#">
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
};

export default Showcase;
