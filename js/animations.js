// ANIMATIONS SCRIPT
function initScrollReveal() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('reveal-left');
        } else {
            item.classList.add('reveal-right');
        }
    });
    
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -100px 0px' };
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const item = entry.target;
            const index = Array.from(projectItems).indexOf(item);
            
            if (entry.isIntersecting) {
                const delay = index * 150;
                setTimeout(() => {
                    item.classList.add('revealed');
                    item.classList.remove('reveal-left', 'reveal-right');
                }, delay);
            } else {
                item.classList.remove('revealed');
                if (index % 2 === 0) {
                    item.classList.add('reveal-left');
                } else {
                    item.classList.add('reveal-right');
                }
            }
        });
    }, observerOptions);
    
    projectItems.forEach(item => projectObserver.observe(item));
}

function initAboutAnimation() {
    const aboutContent = document.querySelector('.about-content');
    const aboutParagraphs = document.querySelectorAll('.about-content p');
    if (!aboutContent) return;
    
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                aboutParagraphs.forEach((paragraph, index) => {
                    setTimeout(() => paragraph.classList.add('revealed'), 300 + (index * 200));
                });
            } else {
                entry.target.classList.remove('revealed');
                aboutParagraphs.forEach(paragraph => paragraph.classList.remove('revealed'));
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    
    aboutObserver.observe(aboutContent);
}

function initContactAnimation() {
    const contactInfo = document.querySelector('.contact-info');
    const contactParagraph = document.querySelector('.contact-info p');
    const contactMethods = document.querySelector('.contact-methods');
    const contactItems = document.querySelectorAll('.contact-item');
    if (!contactInfo) return;
    
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                setTimeout(() => { if (contactParagraph) contactParagraph.classList.add('revealed'); }, 300);
                setTimeout(() => { if (contactMethods) contactMethods.classList.add('revealed'); }, 600);
                contactItems.forEach((item, index) => {
                    setTimeout(() => item.classList.add('revealed'), 900 + (index * 150));
                });
            } else {
                entry.target.classList.remove('revealed');
                if (contactParagraph) contactParagraph.classList.remove('revealed');
                if (contactMethods) contactMethods.classList.remove('revealed');
                contactItems.forEach(item => item.classList.remove('revealed'));
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    
    contactObserver.observe(contactInfo);
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        try {
            initScrollReveal();
            initAboutAnimation();
            initContactAnimation();
        } catch (error) {
            console.error('Animation error:', error);
        }
    }, 200);
});
