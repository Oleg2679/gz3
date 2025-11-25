import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiBook, FiUser } from 'react-icons/fi';
import { useRainbow } from '../contexts/RainbowContext';

const Navigation = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getRainbowColor } = useRainbow();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Navigation items with rainbow colors
  const navItems = [
    { id: 'home', label: 'Главная', icon: <FiHome />, colorIndex: 0 },
    { id: 'catalog', label: 'Каталог', icon: <FiBook />, colorIndex: 1 },
    { id: 'personalized', label: 'Подбор', icon: <FiUser />, colorIndex: 2 },
  ];

  // Professional groups with rainbow colors
  const professionalGroups = [
    { id: 'it', label: 'IT и цифровые технологии', colorIndex: 0 },
    { id: 'energy', label: 'Энергетика и электросети', colorIndex: 1 },
    { id: 'construction', label: 'Строительство и архитектура', colorIndex: 2 },
    { id: 'manufacturing', label: 'Машиностроение', colorIndex: 3 },
    { id: 'transport', label: 'Транспорт и беспилотные системы', colorIndex: 4 },
    { id: 'oilgas', label: 'Нефтегазовая промышленность', colorIndex: 5 },
    { id: 'healthcare', label: 'Здравоохранение и биотехнологии', colorIndex: 6 },
    { id: 'agro', label: 'Агро и пищевые технологии', colorIndex: 0 },
    { id: 'education', label: 'Образование и гуманитарные', colorIndex: 1 },
    { id: 'law', label: 'Право и управление', colorIndex: 2 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);

      // Update section indicator width
      const indicator = document.getElementById('section-indicator');
      if (indicator) {
        indicator.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rainbow-red to-rainbow-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rainbow-red to-rainbow-purple">
              SVO Образование
            </h1>
          </div>

          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === item.id
                    ? `text-white bg-gradient-to-r ${getRainbowColor(item.colorIndex).name === 'red' ? 'from-rainbow-red to-rainbow-orange' : 
                       getRainbowColor(item.colorIndex).name === 'orange' ? 'from-rainbow-orange to-rainbow-yellow' : 
                       getRainbowColor(item.colorIndex).name === 'yellow' ? 'from-rainbow-yellow to-rainbow-green' : 
                       getRainbowColor(item.colorIndex).name === 'green' ? 'from-rainbow-green to-rainbow-cyan' : 
                       getRainbowColor(item.colorIndex).name === 'cyan' ? 'from-rainbow-cyan to-rainbow-blue' : 
                       getRainbowColor(item.colorIndex).name === 'blue' ? 'from-rainbow-blue to-rainbow-purple' : 
                       'from-rainbow-purple to-rainbow-red'} shadow-lg`
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rainbow-red to-rainbow-purple flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-rainbow-red to-rainbow-purple">
              SVO Образование
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700`}>
          <div className="p-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? `text-white bg-gradient-to-r ${getRainbowColor(item.colorIndex).name === 'red' ? 'from-rainbow-red to-rainbow-orange' : 
                       getRainbowColor(item.colorIndex).name === 'orange' ? 'from-rainbow-orange to-rainbow-yellow' : 
                       getRainbowColor(item.colorIndex).name === 'yellow' ? 'from-rainbow-yellow to-rainbow-green' : 
                       getRainbowColor(item.colorIndex).name === 'green' ? 'from-rainbow-green to-rainbow-cyan' : 
                       getRainbowColor(item.colorIndex).name === 'cyan' ? 'from-rainbow-cyan to-rainbow-blue' : 
                       getRainbowColor(item.colorIndex).name === 'blue' ? 'from-rainbow-blue to-rainbow-purple' : 
                       'from-rainbow-purple to-rainbow-red'} shadow-lg`
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <h3 className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Профессиональные группы</h3>
              {professionalGroups.map((group, index) => (
                <button
                  key={group.id}
                  onClick={() => scrollToSection(group.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                    activeSection === group.id
                      ? `text-white bg-gradient-to-r ${getRainbowColor(group.colorIndex).name === 'red' ? 'from-rainbow-red to-rainbow-orange' : 
                         getRainbowColor(group.colorIndex).name === 'orange' ? 'from-rainbow-orange to-rainbow-yellow' : 
                         getRainbowColor(group.colorIndex).name === 'yellow' ? 'from-rainbow-yellow to-rainbow-green' : 
                         getRainbowColor(group.colorIndex).name === 'green' ? 'from-rainbow-green to-rainbow-cyan' : 
                         getRainbowColor(group.colorIndex).name === 'cyan' ? 'from-rainbow-cyan to-rainbow-blue' : 
                         getRainbowColor(group.colorIndex).name === 'blue' ? 'from-rainbow-blue to-rainbow-purple' : 
                         'from-rainbow-purple to-rainbow-red'}`
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getRainbowColor(group.colorIndex).hex }}
                  ></div>
                  <span className="text-sm">{group.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navigation;