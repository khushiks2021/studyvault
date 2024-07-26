import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>UniShare</h1>
      </div>
      <div className="header-buttons">
        <div className="login">
          <button id="loginBtn">Login</button>
        </div>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          <i className="fas fa-moon"></i>
        </div>
      </div>
    </header>
  );
};

const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

export default Header;
