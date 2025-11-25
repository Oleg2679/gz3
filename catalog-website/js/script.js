// Темная тема
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохраненную тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
} else {
    // Определяем системную тему
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        body.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Мобильное меню
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация карточек при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.profession-card, .program-card').forEach(card => {
    observer.observe(card);
});

// Интерактивный радужный поиск
const rainbowSearch = document.getElementById('rainbow-search');
rainbowSearch.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    
    // Изменение цвета поиска в зависимости от ввода
    if (value.length > 0) {
        const colors = ['#FF3B30', '#FF9500', '#FFCC00', '#4CD964', '#5AC8FA', '#007AFF', '#5856D6'];
        const colorIndex = value.length % colors.length;
        rainbowSearch.style.borderColor = colors[colorIndex];
        rainbowSearch.style.boxShadow = `0 0 0 2px ${colors[colorIndex]}40`;
    } else {
        rainbowSearch.style.borderColor = '#e0e0e0';
        rainbowSearch.style.boxShadow = 'none';
    }
});

// Анимация при наведении на карточки профессий
document.querySelectorAll('.profession-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const color = this.getAttribute('data-color');
        this.style.boxShadow = `0 15px 30px ${color}25`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    });
});

// Анимация кнопок
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        const originalBg = this.style.background || getComputedStyle(this).background;
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 122, 255, 0.4)';
    });
});

// Анимация радужной индикационной полосы при прокрутке
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const rainbowBar = document.querySelector('.rainbow-bar');
    
    // Меняем цвет активного сегмента в зависимости от позиции прокрутки
    const sections = document.querySelectorAll('.profession-section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Активируем соответствующую кнопку в навигации
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Анимация радужного градиента на главной
const rainbowGradient = document.querySelector('.rainbow-gradient');
if (rainbowGradient) {
    let rotation = 0;
    setInterval(() => {
        rotation = (rotation + 1) % 360;
        rainbowGradient.style.transform = `rotate(${rotation}deg)`;
    }, 50);
}

// Функциональность для аккордеона на мобильных устройствах
function initAccordion() {
    if (window.innerWidth < 768) {
        document.querySelectorAll('.profession-card').forEach((card, index) => {
            const content = card.querySelector('.card-content');
            if (!content) {
                // Создаем контент для аккордеона
                const originalContent = card.innerHTML;
                card.innerHTML = `
                    <div class="accordion-header">
                        <div class="card-icon">${card.querySelector('.card-icon').innerHTML}</div>
                        <h3>${card.querySelector('h3').textContent}</h3>
                        <span class="accordion-toggle">+</span>
                    </div>
                    <div class="accordion-content">
                        ${card.querySelector('p').outerHTML}
                        ${card.querySelector('.btn').outerHTML}
                    </div>
                `;
                
                const accordionHeader = card.querySelector('.accordion-header');
                accordionHeader.addEventListener('click', () => {
                    card.classList.toggle('active');
                    const toggle = card.querySelector('.accordion-toggle');
                    toggle.textContent = card.classList.contains('active') ? '−' : '+';
                });
            }
        });
    }
}

// Инициализация аккордеона при загрузке и изменении размера окна
window.addEventListener('load', initAccordion);
window.addEventListener('resize', initAccordion);

// Добавляем анимацию пульсации для активных элементов
document.querySelectorAll('.profession-card, .program-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.add('pulse');
        setTimeout(() => {
            this.classList.remove('pulse');
        }, 1000);
    });
});

// Добавляем микро-анимации для интерактивности
document.querySelectorAll('button, .btn, a').forEach(element => {
    element.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    element.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    
    // Анимация появления элементов
    const elements = document.querySelectorAll('.profession-card, .program-card, .hero-content');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Добавляем CSS для анимаций
const style = document.createElement('style');
style.textContent = `
    .profession-card, .program-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
    }
    
    .profession-card.animated, .program-card.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .profession-card.active .accordion-content {
        max-height: 200px;
    }
    
    .accordion-toggle {
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }
    
    .nav-menu a.active {
        color: var(--blue);
        font-weight: bold;
    }
    
    body.loaded * {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Обработка формы поиска
document.getElementById('rainbow-search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(this.value);
    }
});

function performSearch(query) {
    if (query.trim() === '') return;
    
    // Простая реализация поиска - в реальном приложении здесь будет логика поиска
    console.log(`Поиск: ${query}`);
    
    // Подсвечиваем найденные элементы
    document.querySelectorAll('.profession-card h3, .profession-card p').forEach(element => {
        if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
            element.parentElement.classList.add('highlight');
            setTimeout(() => {
                element.parentElement.classList.remove('highlight');
            }, 2000);
        }
    });
}

// Добавляем стили для подсветки результатов поиска
const searchHighlightStyle = document.createElement('style');
searchHighlightStyle.textContent = `
    .highlight {
        animation: highlight 2s ease;
    }
    
    @keyframes highlight {
        0% { box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.5); }
        50% { box-shadow: 0 0 0 3px rgba(255, 215, 0, 1); }
        100% { box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.5); }
    }
`;
document.head.appendChild(searchHighlightStyle);