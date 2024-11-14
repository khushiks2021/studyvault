import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import '../styles/header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/"> {/* Wrap logo in Link component */}
          <h1>StudyVault</h1>
        </Link>
      </div>
      <nav className="nav-links">
        <div className="main-links">
          <ScrollLink to="topics-section" smooth={true} duration={500}>
            Search Notes
          </ScrollLink>
        </div>
        <ScrollLink to="footer-section" smooth={true} duration={500} className="about-link">
          About Us
        </ScrollLink>
      </nav>
      <div className="header-buttons">
        <Link to="/profile" className="button profile-btn">
          <FaUserCircle size={20} style={{ marginRight: '8px' }} />
          My Profile
        </Link>
        <Link to="/signup" className="button sign-up-btn">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
