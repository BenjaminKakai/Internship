import React from 'react';
import './Footer.css';
import EmailIcon from '/home/benjamin-kakai/my-app/src/boxicons-2.0.9/svg/regular/bx-mail-send.svg';
import PhoneIcon from '/home/benjamin-kakai/my-app/src/boxicons-2.0.9/svg/regular/bx-phone-call.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <h3>
            <img src="/images/intelliverse_white-removebg-preview-e1683667756213.png" alt="Resources" className="resources-image" />
          </h3>
          <h4>
            <span className="icon-wrapper"><img src={EmailIcon} alt="Email Icon" /></span>
            <span className="text-wrapper">Email us:</span>
          </h4>
          <a href="mailto:info@intelliverseai.com">info@intelliverseai.com</a>
          <h4>
            <span className="icon-wrapper"><img src={PhoneIcon} alt="Phone Icon" /></span>
            <span className="text-wrapper">Call us:</span>
          </h4>
          <a href="tel:012-345-6789">+254746026037</a>
          {/* Add three more rows here if needed */}
        </div>
        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="../home-2/index.html">Home</a></li>
            <li><a href="../home/index.html">Services</a></li>
            <li><a href="../home-2/index.html">Solutions</a></li>
            <li><a href="../home/index.html">Technology</a></li>
            <li><a href="../home-2/index.html">Contact Us</a></li>
            {/* Add four more links here */}
          </ul>
        </div>
        <div className="footer__col">
          <h3>Resources</h3>
            <ul>
            <li><a href="../home-2/index.html">Blog</a></li>
            <li><a href="../home/index.html">Articles</a></li>
            <li><a href="../home-2/index.html">Reseach Papers</a></li>
            <li><a href="../home/index.html">Careers</a></li>
            <li><a href="../home-2/index.html">Privacy & Policy</a></li>
            {/* Add four more links here */}
          </ul>
        </div>
        <div className="footer__col">
          <h3>Newsletter</h3>
          <p>Register now to get latest updates Promotion &amp; Coupons</p>
          <form action="#">
            <div className="footer__subscribe-input-8">
              <input
                size="40"
                className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email"
                aria-invalid="false"
                placeholder="Your email"
                value=""
                type="email"
                name="email-975"
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

