import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Academics from './pages/Academics';
import CompetitiveExams from './pages/CompetitiveExams';
import CPDSA from './pages/CPDSA';
import Development from './pages/Development';
import InterviewPlacement from './pages/InterviewPlacement';
import Topics from './components/Topics';
import MyProfile from './pages/MyProfile';
import FileUpload from './components/FileUpload';


const App = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      {/* Conditionally render Hero section */}
      {location.pathname === '/' && <Hero />}
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/competitive-exams" element={<CompetitiveExams />} />
        <Route path="/cp-dsa" element={<CPDSA />} />
        <Route path="/development" element={<Development />} />
        <Route path="/interview-placement" element={<InterviewPlacement />} />
        <Route path="/profile" element={<MyProfile/>} />
      </Routes>
      <FileUpload />
      <Footer />
    </div>
  );
};

export default App;
