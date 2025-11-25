import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CatalogSection from './components/CatalogSection';
import PersonalizedSection from './components/PersonalizedSection';
import Footer from './components/Footer';
import { RainbowProvider } from './contexts/RainbowContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <RainbowProvider>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <div className="section-indicator" id="section-indicator"></div>
        
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main>
          <HeroSection setActiveSection={setActiveSection} />
          <CatalogSection setActiveSection={setActiveSection} activeSection={activeSection} />
          <PersonalizedSection />
        </main>
        
        <Footer />
      </div>
    </RainbowProvider>
  );
};

export default App;