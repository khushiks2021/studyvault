import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer id="footer-section" className="footer-container">
      {/* Left Section: Logo, Note, and Social Media */}
      <div className="footer-left">
        <h2 className="footer-logo">StudyVault</h2>
        <p className="footer-note">
        StudyVault is here to support your academic journey. We’re building a space where students can connect, share knowledge, and grow together. By fostering collaboration and curiosity, we aim to make learning more engaging and impactful.
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Center Section: More Links */}
      <div className="footer-center">
        <h3>More</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/endorsements">Endorsements</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/media">Media</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      {/* Right Section: Information Links */}
      <div className="footer-right">
        <h3>Information</h3>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/copyright">Copyright</a></li>
          <li><a href="/terms-conditions">Terms & Conditions</a></li>
        </ul>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        <p>© 2024 StudyVault | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
