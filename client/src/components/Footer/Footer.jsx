import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook
} from 'react-icons/ai';

import './Footer.css';

const LandingFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-links__column">
            <h2 className="footer-links__title">Quick Links</h2>
            <ul className="footer-links__list">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#ourservices" className="footer-link">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Benefits
                </a>
              </li>
              <li>
                <a href="/faq" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links__column">
            <h2 className="footer-links__title">Community</h2>
            <ul className="footer-links__list">
              <li>
                <a href="#" aria-label="Follow me on Twitter" className="footer-link">
                  <AiFillTwitterCircle className="footer-icon" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/piyush-kalyan/" aria-label="Follow me on Linkedin" className="footer-link">
                  <AiFillLinkedin className="footer-icon" />
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" aria-label="Follow me on Instagram" className="footer-link">
                  <AiFillInstagram className="footer-icon" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" aria-label="Follow me on Facebook" className="footer-link">
                  <AiFillFacebook className="footer-icon" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links__column">
            <h2 className="footer-links__title">Our Products</h2>
            <ul className="footer-links__list">
              <li>
                <a href="/" className="footer-link">
                  Bare Doors
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Designer Doors 
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Laminate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LandingFooter;
