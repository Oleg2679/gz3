import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiBook, FiAward, FiGlobe } from 'react-icons/fi';

const HeroSection = ({ setActiveSection }) => {
  const scrollToCatalog = () => {
    setActiveSection('catalog');
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden rainbow-gradient-bg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Каталог образовательных программ для участников СВО
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Откройте новые возможности для профессионального роста и развития с нашим инновационным каталогом образовательных программ
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={scrollToCatalog}
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <FiBook size={20} />
              <span>Изучить программы</span>
            </button>
            
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <FiAward className="text-yellow-300" size={24} />
                <span>100+ программ</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiGlobe className="text-blue-300" size={24} />
                <span>По всей России</span>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBook className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Разнообразие направлений</h3>
              <p className="text-white/80">10 ключевых профессиональных групп для выбора</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Качественное образование</h3>
              <p className="text-white/80">Программы от ведущих вузов и колледжей</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Удобный формат</h3>
              <p className="text-white/80">Очно, заочно и в онлайн-формате</p>
            </div>
          </motion.div>

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <FiArrowDown className="text-white mx-auto" size={32} />
          </motion.div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-white/30 animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-white/20 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full bg-white/40 animate-ping delay-1000"></div>
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 rounded-full bg-white/25 animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;