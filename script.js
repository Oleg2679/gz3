// JavaScript для сайта каталога образовательных программ для участников СВО

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация аккордеонов
    initAccordions();
    
    // Инициализация выпадающих меню
    initDropdowns();
    
    // Инициализация поиска
    initSearch();
    
    // Инициализация плавного скролла
    initSmoothScroll();
});

// Функция инициализации аккордеонов
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Закрываем все аккордеоны в этой секции
            const allItems = this.closest('.accordion-section').querySelectorAll('.accordion-item');
            allItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Если текущий аккордеон был закрыт, открываем его
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
}

// Функция инициализации выпадающих меню
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        // Для мобильных устройств
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                const menu = dropdown.querySelector('.dropdown-menu');
                const isVisible = menu.style.display === 'block';
                
                // Скрываем все другие меню
                document.querySelectorAll('.dropdown-menu').forEach(m => {
                    m.style.display = 'none';
                });
                
                // Показываем/скрываем текущее меню
                menu.style.display = isVisible ? 'none' : 'block';
            }
        });
        
        // Для десктопных устройств
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 768) {
                this.querySelector('.dropdown-menu').style.display = 'block';
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 768) {
                this.querySelector('.dropdown-menu').style.display = 'none';
            }
        });
    });
    
    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
}

// Функция инициализации поиска
function initSearch() {
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const profession = document.getElementById('search-profession').value;
            const region = document.getElementById('search-region').value;
            const level = document.getElementById('education-level').value;
            
            // Здесь можно реализовать логику поиска
            console.log('Поиск:', { profession, region, level });
            
            // Показываем сообщение о поиске
            alert(`Поиск профессии: ${profession || 'все'}, регион: ${region || 'все'}, уровень: ${level || 'все'}`);
        });
    }
    
    // Обработка нажатия Enter в полях поиска
    const searchInputs = document.querySelectorAll('#search-profession, #search-region');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.querySelector('.search-btn').click();
            }
        });
    });
}

// Функция инициализации плавного скролла
function initSmoothScroll() {
    // Плавный скролл к якорным ссылкам
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Учитываем высоту фиксированного меню
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Добавление класса активной страницы к текущему разделу
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Обновляем активную ссылку при скролле
window.addEventListener('scroll', updateActiveLink);

// Добавляем функцию для отслеживания показа элементов при скролле (для анимаций)
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.profession-card, .news-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Инициализируем стили для анимаций
document.querySelectorAll('.profession-card, .news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Обработчик скролла для анимаций
window.addEventListener('scroll', handleScrollAnimations);

// Вызываем при загрузке для элементов, которые уже видны
window.addEventListener('load', handleScrollAnimations);