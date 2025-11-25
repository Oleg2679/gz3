import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiSearch, FiMapPin, FiFilter, FiBook, FiUsers, FiGlobe } from 'react-icons/fi';
import { useRainbow } from '../contexts/RainbowContext';

const CatalogSection = ({ setActiveSection, activeSection }) => {
  const { getRainbowColor } = useRainbow();
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [educationLevel, setEducationLevel] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Professional groups data with rainbow colors
  const professionalGroups = [
    { 
      id: 'it', 
      title: 'IT и цифровые технологии', 
      colorIndex: 0,
      description: 'Программы по программированию, кибербезопасности, искусственному интеллекту и цифровой трансформации',
      specialties: [
        { name: 'Программирование', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Кибербезопасность', level: 'ВО', duration: '4 года' },
        { name: 'Искусственный интеллект', level: 'ВО', duration: '4 года' },
        { name: 'Цифровая трансформация', level: 'СПО/ВО', duration: '2-4 года' }
      ],
      institutions: ['МФТИ', 'МГТУ им. Баумана', 'СПбПУ', 'НИУ ВШЭ']
    },
    { 
      id: 'energy', 
      title: 'Энергетика и электросети', 
      colorIndex: 1,
      description: 'Программы по электротехнике, энергетике, возобновляемым источникам энергии',
      specialties: [
        { name: 'Электротехника', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Энергетика', level: 'ВО', duration: '4 года' },
        { name: 'Возобновляемая энергетика', level: 'ВО', duration: '4 года' },
        { name: 'Электросети', level: 'СПО/ВО', duration: '2-4 года' }
      ],
      institutions: ['НИУ МЭИ', 'СПбГЭТУ "ЛЭТИ"', 'КГЭУ', 'ДГТУ']
    },
    { 
      id: 'construction', 
      title: 'Строительство, архитектура и геоданные', 
      colorIndex: 2,
      description: 'Программы по архитектуре, строительству, геодезии и управлению проектами',
      specialties: [
        { name: 'Архитектура', level: 'ВО', duration: '5 лет' },
        { name: 'Промышленное строительство', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Геодезия', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'BIM-технологии', level: 'ВО', duration: '4 года' }
      ],
      institutions: ['МГСУ', 'СПбГАСУ', 'НИУ МГСУ', 'Казанский ГАСУ']
    },
    { 
      id: 'manufacturing', 
      title: 'Машиностроение и производственные технологии', 
      colorIndex: 3,
      description: 'Программы по машиностроению, робототехнике, аддитивным технологиям',
      specialties: [
        { name: 'Машиностроение', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Робототехника', level: 'ВО', duration: '4 года' },
        { name: 'CAD/CAM системы', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Аддитивные технологии', level: 'ВО', duration: '4 года' }
      ],
      institutions: ['МГТУ им. Баумана', 'СПбПУ', 'УлГТУ', 'КГТУ им. Туполева']
    },
    { 
      id: 'transport', 
      title: 'Транспорт и беспилотные системы', 
      colorIndex: 4,
      description: 'Программы по транспортным системам, беспилотникам, логистике',
      specialties: [
        { name: 'Автомобильные дороги', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Беспилотные системы', level: 'ВО', duration: '4 года' },
        { name: 'Логистика', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Авиационные системы', level: 'ВО', duration: '4 года' }
      ],
      institutions: ['МГТУ им. Баумана', 'МАДИ', 'СибАДИ', 'РГУПС']
    },
    { 
      id: 'oilgas', 
      title: 'Нефтегазовая промышленность и недропользование', 
      colorIndex: 5,
      description: 'Программы по нефтегазовому делу, геологии, бурению скважин',
      specialties: [
        { name: 'Нефтегазовое дело', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Геология', level: 'ВО', duration: '4-5 лет' },
        { name: 'Бурение', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Переработка нефти', level: 'ВО', duration: '4 года' }
      ],
      institutions: ['ГУНГ им. Губкина', 'Сургутский ГУ', 'ТюмГНГУ', 'КазНИПИ']
    },
    { 
      id: 'healthcare', 
      title: 'Здравоохранение и биотехнологии', 
      colorIndex: 6,
      description: 'Программы по медицине, фармацевтике, биотехнологиям',
      specialties: [
        { name: 'Лечебное дело', level: 'СПО/ВО', duration: '2-6 лет' },
        { name: 'Фармация', level: 'СПО/ВО', duration: '4-5 лет' },
        { name: 'Биотехнологии', level: 'ВО', duration: '4 года' },
        { name: 'Медицинская кибернетика', level: 'ВО', duration: '4 года' }
      ],
      institutions: ['МГМСУ им. Сеченова', 'СПбГМУ им. Павлова', 'Казанский ГМУ', 'РНИМУ им. Пирогова']
    },
    { 
      id: 'agro', 
      title: 'Агро, ветеринария и пищевые технологии', 
      colorIndex: 0,
      description: 'Программы по агрономии, ветеринарии, пищевым технологиям',
      specialties: [
        { name: 'Агрономия', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Ветеринария', level: 'СПО/ВО', duration: '2-5 лет' },
        { name: 'Пищевые технологии', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Агроинженерия', level: 'ВО', duration: '4 года' }
      ],
      institutions: ['РГАУ-МСХА', 'Казанский ГАУ', 'СибГУ им. Руднева', 'Дальрыбвтуз']
    },
    { 
      id: 'education', 
      title: 'Образование и гуманитарные направления', 
      colorIndex: 1,
      description: 'Программы по педагогике, психологии, лингвистике и культурологии',
      specialties: [
        { name: 'Педагогика', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Психология', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Лингвистика', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Культурология', level: 'ВО', duration: '4 года' }
      ],
      institutions: ['МПГУ', 'РГГУ', 'СПбГУ', 'КФУ']
    },
    { 
      id: 'law', 
      title: 'Право, управление и коммуникации', 
      colorIndex: 2,
      description: 'Программы по юриспруденции, государственному управлению, PR',
      specialties: [
        { name: 'Юриспруденция', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Государственное управление', level: 'ВО', duration: '4 года' },
        { name: 'PR и реклама', level: 'СПО/ВО', duration: '2-4 года' },
        { name: 'Международные отношения', level: 'ВО', duration: '4 года' }
      ],
      institutions: ['МГЮА', 'РАНХиГС', 'СПбГУ', 'НИУ ВШЭ']
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const filteredGroups = professionalGroups.filter(group => 
    group.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.specialties.some(spec => spec.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredSpecialties = (group) => {
    return group.specialties.filter(spec => {
      const levelMatch = educationLevel === 'all' || spec.level.includes(educationLevel);
      return levelMatch;
    });
  };

  return (
    <section id="catalog" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rainbow-red to-rainbow-purple">
            Каталог образовательных программ
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Выберите направление, которое соответствует вашим интересам и целям. 
            Мы собрали лучшие образовательные программы для участников СВО.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по направлениям..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rainbow-blue focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rainbow-blue focus:border-transparent appearance-none"
              >
                <option value="all">Все уровни образования</option>
                <option value="СПО">СПО</option>
                <option value="ВО">Высшее образование</option>
              </select>
            </div>
            
            <div className="relative">
              <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rainbow-blue focus:border-transparent appearance-none"
              >
                <option value="all">Все регионы</option>
                <option value="moscow">Москва</option>
                <option value="spb">Санкт-Петербург</option>
                <option value="regions">Регионы</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Professional Groups */}
        <div className="space-y-6">
          {filteredGroups.map((group, index) => {
            const color = getRainbowColor(group.colorIndex);
            const isExpanded = expandedSection === group.id;
            
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  activeSection === group.id ? 'ring-2 ring-opacity-50' : ''
                }`}
                style={{ 
                  backgroundColor: color.name === 'red' ? '#fff5f5' : 
                                  color.name === 'orange' ? '#fffaf0' : 
                                  color.name === 'yellow' ? '#fffde7' : 
                                  color.name === 'green' ? '#f0fff0' : 
                                  color.name === 'cyan' ? '#f0f8ff' : 
                                  color.name === 'blue' ? '#f0f0ff' : 
                                  '#f5f0ff',
                  borderColor: color.hex,
                  borderWidth: activeSection === group.id ? '2px' : '0px'
                }}
              >
                <button
                  onClick={() => toggleSection(group.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-opacity-80 transition-colors duration-200"
                  style={{ 
                    backgroundColor: color.name === 'red' ? '#fff5f5' : 
                                    color.name === 'orange' ? '#fffaf0' : 
                                    color.name === 'yellow' ? '#fffde7' : 
                                    color.name === 'green' ? '#f0fff0' : 
                                    color.name === 'cyan' ? '#f0f8ff' : 
                                    color.name === 'blue' ? '#f0f0ff' : 
                                    '#f5f0ff'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{group.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {filteredSpecialties(group).length} специальностей
                    </span>
                    {isExpanded ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-200 dark:border-gray-600 p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <FiBook className="mr-2" /> Специальности
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredSpecialties(group).map((specialty, specIndex) => (
                          <div 
                            key={specIndex}
                            className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-200"
                          >
                            <div className="flex justify-between items-start">
                              <h5 className="font-medium text-gray-900 dark:text-white">{specialty.name}</h5>
                              <span className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded">
                                {specialty.level}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Срок обучения: {specialty.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <FiGlobe className="mr-2" /> Учебные заведения
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.institutions.map((institution, instIndex) => (
                          <span 
                            key={instIndex}
                            className="px-3 py-1 rounded-full text-sm bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500"
                          >
                            {institution}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Institutions Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <FiMapPin className="mr-2" /> Карта образовательных учреждений
          </h3>
          <div className="bg-gray-100 dark:bg-gray-600 rounded-xl h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500">
            <div className="text-center">
              <FiMapPin className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 dark:text-gray-300">Интерактивная карта образовательных учреждений</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Выберите регион для просмотра доступных программ</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogSection;