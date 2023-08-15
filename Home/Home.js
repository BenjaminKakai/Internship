import React, { useState, useEffect, useRef } from "react";
import homeVideo from "../home video.mp4";
import './Home.css';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const inputRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      setTimeout(() => setShowMenu(false), 5000);
    }
  };

  const toggleChat = () => {
    setShowChat(true);
  };

  const sendMessage = () => {
    setMessageSent(true);
    // Optionally clear the text area
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const closeMenu = () => setShowMenu(false);

  // Set up a timer to hide the chat after 20 seconds of showing the thank you note
  useEffect(() => {
    let timer;
    if (messageSent) {
      timer = setTimeout(() => {
        setShowChat(false);
        setMessageSent(false);
      }, 5000); // Hide after 20 seconds
    }
    return () => clearTimeout(timer);
  }, [messageSent]);

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
          <button className="btn btn-primary" onClick={toggleMenu}>
            EXPLORE MORE
          </button>
          <button className="btn btn-secondary" onClick={toggleChat}>
            GET IN TOUCH
          </button>
          {showMenu && (
            <div className="dropdown-menu">
              <span className="dropdown-close" onClick={closeMenu}>X</span>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#teams">Teams</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          )}
          {showChat && (
            <div className="chat-dialogue">
              <p>Hello, how can I be of help today?</p>
              <textarea ref={inputRef} placeholder="Type your text here..."></textarea>
              <button onClick={sendMessage}>Send</button>
              {messageSent && (
                <p>Thank you for reaching out. An expert will be in touch with you shortly.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

