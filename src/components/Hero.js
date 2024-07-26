import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h2>Welcome to UniShare</h2>
          <p>A centralized Portal for Sharing Resources</p>
          <div className="search-bar">
            <input type="text" placeholder="Search For Notes, Books, Etc." />
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
