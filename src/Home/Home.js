import React from "react";
import homeVideo from "../home video.mp4";
import './Home.css';

const Home = () => {
  return (
    <div className="home-slider" id="home">
      <div className="slider-slide">
        <video className="background-video" id="background-video" autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
        </video>
        <div className="home-content">
          <h1>
            Driving changes <br /> through AI &amp; Data <span><br />Solutions</span>
          </h1>
          <p>
            <b>We help enterprises build custom AI Solutions<br /> and Growth Stage Companies seeking to maximize results</b>
          </p>
          <a className="btn btn-primary" href="#">
            EXPLORE MORE
          </a>
          <a className="btn btn-secondary" href="#">
            GET IN TOUCH
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

