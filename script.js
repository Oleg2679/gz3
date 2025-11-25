document.addEventListener('DOMContentLoaded', function() {
    // Main accordion functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.querySelectorAll('.accordion-content').forEach(con => {
                con.classList.remove('open');
            });
            
            // If the clicked item was not active, open it
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('open');
            }
        });
    });
    
    // Sub-accordion functionality
    const subAccordionButtons = document.querySelectorAll('.sub-accordion-button');
    
    subAccordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all sub-accordion items in the same parent
            const parentAccordionItem = this.closest('.accordion-content');
            if (parentAccordionItem) {
                const siblingButtons = parentAccordionItem.querySelectorAll('.sub-accordion-button');
                const siblingContents = parentAccordionItem.querySelectorAll('.sub-accordion-content');
                
                siblingButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                siblingContents.forEach(con => {
                    con.classList.remove('open');
                });
            }
            
            // If the clicked item was not active, open it
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('open');
            } else {
                // If it was active, close it
                this.classList.remove('active');
                content.classList.remove('open');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});