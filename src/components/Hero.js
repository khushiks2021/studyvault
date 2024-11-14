import React from 'react';
import '../styles/hero.css';
import { FaSearch, FaHeart, FaComment } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h2>Welcome to StudyVault</h2>
          <h4>Your go-to for college notes, assignments, PYQs, and coding resources. Easily access, organize, and boost your studies. Unlock your academic success with StudyVault! </h4>
          <div className="hero-features">
            <div className="feature-box">
              <div className="feature-icon"><FaHeart /></div>
              <h3>User-Friendly Organization</h3>
              <p>Quickly find, bookmark, and organize materials for streamlined study sessions.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon"><FaSearch /></div>
              <h3>Tailored for Your Success</h3>
              <p>Browse materials by course, year, and semester to quickly find  what you need.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon"><FaComment /></div>
              <h3>Community-Driven Content</h3>
              <p> Engage with peers, share insights, and contribute resources.</p>
            </div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search For Notes, Books, Etc." />
            <button><FaSearch /> Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

