import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rainbow-red to-rainbow-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rainbow-red to-rainbow-purple">
                SVO Образование
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Каталог образовательных программ для участников специальной военной операции
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Направления</h4>
            <ul className="space-y-2">
              <li><a href="#it" className="text-gray-400 hover:text-white transition-colors">IT и цифровые технологии</a></li>
              <li><a href="#energy" className="text-gray-400 hover:text-white transition-colors">Энергетика и электросети</a></li>
              <li><a href="#construction" className="text-gray-400 hover:text-white transition-colors">Строительство и архитектура</a></li>
              <li><a href="#manufacturing" className="text-gray-400 hover:text-white transition-colors">Машиностроение</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Программы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">СПО программы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Бакалавриат</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Магистратура</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Краткосрочные курсы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiMail className="mt-1 text-gray-400" />
                <span className="text-gray-400">info@svo-education.ru</span>
              </li>
              <li className="flex items-start space-x-2">
                <FiPhone className="mt-1 text-gray-400" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-2">
                <FiMapPin className="mt-1 text-gray-400" />
                <span className="text-gray-400">Москва, ул. Примерная, 15</span>
              </li>
              <li className="flex items-start space-x-2">
                <FiGlobe className="mt-1 text-gray-400" />
                <span className="text-gray-400">www.svo-education.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Каталог образовательных программ для участников СВО. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Специально разработано для поддержки профессионального развития участников специальной военной операции
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;