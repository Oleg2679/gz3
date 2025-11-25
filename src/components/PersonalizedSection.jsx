import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCheck, FiArrowRight, FiTarget, FiAward, FiBook } from 'react-icons/fi';

const PersonalizedSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendedPrograms, setRecommendedPrograms] = useState([]);

  const questions = [
    {
      id: 'interest',
      question: 'Какая область деятельности вам интересна?',
      options: [
        { value: 'tech', label: 'Технологии и инновации', icon: <FiTarget /> },
        { value: 'building', label: 'Строительство и инженерия', icon: <FiTarget /> },
        { value: 'medicine', label: 'Медицина и здоровье', icon: <FiTarget /> },
        { value: 'social', label: 'Образование и социальная сфера', icon: <FiTarget /> },
        { value: 'law', label: 'Право и управление', icon: <FiTarget /> }
      ]
    },
    {
      id: 'education',
      question: 'Какой уровень образования вы хотите получить?',
      options: [
        { value: 'vocational', label: 'Среднее профессиональное (колледж)', icon: <FiBook /> },
        { value: 'bachelor', label: 'Бакалавриат', icon: <FiBook /> },
        { value: 'master', label: 'Магистратура', icon: <FiBook /> },
        { value: 'short', label: 'Краткосрочные курсы', icon: <FiBook /> }
      ]
    },
    {
      id: 'format',
      question: 'Какой формат обучения вам предпочтительнее?',
      options: [
        { value: 'fulltime', label: 'Очно', icon: <FiUser /> },
        { value: 'parttime', label: 'Заочно', icon: <FiUser /> },
        { value: 'online', label: 'Онлайн', icon: <FiUser /> },
        { value: 'mixed', label: 'Смешанный формат', icon: <FiUser /> }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Generate recommendations based on answers
      generateRecommendations({ ...answers, [questionId]: value });
      setShowResults(true);
    }
  };

  const generateRecommendations = (finalAnswers) => {
    // Simple recommendation logic based on answers
    const programs = [];
    
    if (finalAnswers.interest === 'tech') {
      programs.push(
        { name: 'Программирование', category: 'IT и цифровые технологии', institution: 'МФТИ', level: 'Высшее', duration: '4 года' },
        { name: 'Кибербезопасность', category: 'IT и цифровые технологии', institution: 'НИУ ВШЭ', level: 'Высшее', duration: '4 года' },
        { name: 'CAD/CAM системы', category: 'Машиностроение', institution: 'МГТУ им. Баумана', level: 'Среднее/Высшее', duration: '2-4 года' }
      );
    } else if (finalAnswers.interest === 'building') {
      programs.push(
        { name: 'Промышленное строительство', category: 'Строительство', institution: 'МГСУ', level: 'Среднее/Высшее', duration: '2-4 года' },
        { name: 'BIM-технологии', category: 'Строительство', institution: 'СПбГАСУ', level: 'Высшее', duration: '4 года' },
        { name: 'Машиностроение', category: 'Машиностроение', institution: 'УлГТУ', level: 'Среднее/Высшее', duration: '2-4 года' }
      );
    } else if (finalAnswers.interest === 'medicine') {
      programs.push(
        { name: 'Лечебное дело', category: 'Здравоохранение', institution: 'МГМСУ им. Сеченова', level: 'Среднее/Высшее', duration: '2-6 лет' },
        { name: 'Фармация', category: 'Здравоохранение', institution: 'СПбГМУ им. Павлова', level: 'Среднее/Высшее', duration: '4-5 лет' },
        { name: 'Медицинская кибернетика', category: 'Здравоохранение', institution: 'РНИМУ им. Пирогова', level: 'Высшее', duration: '4 года' }
      );
    } else if (finalAnswers.interest === 'social') {
      programs.push(
        { name: 'Педагогика', category: 'Образование', institution: 'МПГУ', level: 'Среднее/Высшее', duration: '2-4 года' },
        { name: 'Психология', category: 'Образование', institution: 'РГГУ', level: 'Среднее/Высшее', duration: '2-4 года' },
        { name: 'Культурология', category: 'Образование', institution: 'НИУ ВШЭ', level: 'Высшее', duration: '4 года' }
      );
    } else if (finalAnswers.interest === 'law') {
      programs.push(
        { name: 'Юриспруденция', category: 'Право и управление', institution: 'МГЮА', level: 'Среднее/Высшее', duration: '2-4 года' },
        { name: 'Государственное управление', category: 'Право и управление', institution: 'РАНХиГС', level: 'Высшее', duration: '4 года' },
        { name: 'Международные отношения', category: 'Право и управление', institution: 'СПбГУ', level: 'Высшее', duration: '4 года' }
      );
    }
    
    setRecommendedPrograms(programs);
  };

  const resetTest = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setRecommendedPrograms([]);
  };

  return (
    <section id="personalized" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rainbow-purple to-rainbow-red">
            Персональный подбор программ
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Пройдите короткий тест, чтобы получить персональные рекомендации по образовательным программам
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8"
            >
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Вопрос {currentStep + 1} из {questions.length}
                  </span>
                  <span className="text-sm font-medium text-rainbow-blue">
                    {Math.round(((currentStep + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-rainbow-blue to-rainbow-purple h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {questions[currentStep]?.question}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentStep]?.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                      className="p-4 text-left rounded-xl border border-gray-200 dark:border-gray-600 hover:border-rainbow-blue hover:shadow-md transition-all duration-200 flex items-start space-x-3 group"
                    >
                      <div className="text-rainbow-blue group-hover:text-rainbow-purple transition-colors">
                        {option.icon}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{option.label}</span>
                      <FiArrowRight className="ml-auto text-gray-400 group-hover:text-rainbow-blue transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    currentStep === 0 
                      ? 'bg-gray-100 dark:bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                  }`}
                >
                  Назад
                </button>
                
                <button
                  onClick={() => setCurrentStep(Math.min(questions.length - 1, currentStep + 1))}
                  disabled={currentStep === questions.length - 1}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    currentStep === questions.length - 1 
                      ? 'bg-gray-100 dark:bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                  }`}
                >
                  Далее
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-rainbow-green to-rainbow-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Рекомендации для вас
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  На основе ваших ответов мы подобрали подходящие образовательные программы
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {recommendedPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{program.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{program.category}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Учебное заведение: {program.institution}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <span className="inline-block px-3 py-1 text-xs bg-rainbow-blue/10 text-rainbow-blue rounded-full">
                          {program.level}
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{program.duration}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={resetTest}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-rainbow-purple to-rainbow-blue text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Пройти тест заново
                </button>
                <button
                  onClick={() => {
                    const catalogSection = document.getElementById('catalog');
                    if (catalogSection) {
                      catalogSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 px-6 py-3 bg-white dark:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                >
                  Изучить все программы
                </button>
              </div>
            </motion.div>
          )}

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-rainbow-red to-rainbow-orange rounded-lg flex items-center justify-center mb-4">
                <FiAward className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Качественное образование</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Все программы аккредитованы и соответствуют современным требованиям рынка труда
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-rainbow-green to-rainbow-cyan rounded-lg flex items-center justify-center mb-4">
                <FiUser className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Поддержка участников СВО</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Специальные условия и программы для участников специальной военной операции
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-rainbow-blue to-rainbow-purple rounded-lg flex items-center justify-center mb-4">
                <FiBook className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Различные форматы</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Очные, заочные и онлайн-форматы обучения для удобства каждого участника
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedSection;