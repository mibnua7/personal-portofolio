// ENHANCED NAVIGATION SCRIPT
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing navigation...');
    
    // Get navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section[id]');
    
    if (!navLinks.length) {
        console.error('No navigation links found');
        return;
    }
    
    // Header auto-hide functionality
    let lastScrollTop = 0;
    const hideThreshold = 80;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header auto-hide logic
        if (header) {
            if (scrollTop > lastScrollTop && scrollTop > hideThreshold) {
                header.style.transform = 'translateY(-100%)';
                header.style.opacity = '0.95';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
            }
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
        
        lastScrollTop = scrollTop;
    }
    
    // Function to update active nav link based on current section in view
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 150; // Offset for header
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // If at the very top, set hero as active
        if (window.scrollY < 100) {
            current = 'hero';
        }
        
        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }
    
    // Setup navigation click handlers with smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                const targetY = targetSection.offsetTop - 80; // Account for header height
                
                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth'
                });
                
                // Manually update active state
                navLinks.forEach(nl => nl.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Set initial active state
    setTimeout(() => {
        updateActiveNavLink();
        console.log('Navigation initialized successfully');
        console.log('Navigation links:', navLinks.length);
    }, 100);
});
