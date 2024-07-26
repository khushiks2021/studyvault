import React from 'react';
import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Topics from './components/Topics';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Topics />
      </main>
      <Footer />
    </div>
  );
};

export default App;
