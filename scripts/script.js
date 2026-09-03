// ==================== MOBILE MENU FUNCTIONALITY ====================

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const body = document.body;

    // ========== DESKTOP DROPDOWNS ==========
    const desktopDropdowns = document.querySelectorAll('.desktop-nav .dropdown');

    if (window.innerWidth >= 1024) {
        desktopDropdowns.forEach(dropdown => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');

            dropdown.addEventListener('mouseenter', function () {
                this.classList.add('active');
                if (dropdownContent) {
                    dropdownContent.style.opacity = '1';
                    dropdownContent.style.visibility = 'visible';
                }
            });

            dropdown.addEventListener('mouseleave', function () {
                this.classList.remove('active');
                if (dropdownContent) {
                    dropdownContent.style.opacity = '0';
                    dropdownContent.style.visibility = 'hidden';
                }
            });
        });
    }

    // ========== MOBILE DROPDOWNS ==========
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const dropdown = this.parentElement;
            const isActive = dropdown.classList.contains('active');

            // Close other dropdowns
            mobileDropdownToggles.forEach(otherToggle => {
                const otherDropdown = otherToggle.parentElement;
                if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                    otherDropdown.classList.remove('active');
                    const content = otherDropdown.querySelector('.mobile-dropdown-content');
                    if (content) {
                        content.style.display = 'none';
                    }
                }
            });

            dropdown.classList.toggle('active');
            const content = dropdown.querySelector('.mobile-dropdown-content');
            if (content) {
                if (dropdown.classList.contains('active')) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            }
        });
    });

    // ========== MOBILE MENU TOGGLE ==========
    function closeMobileMenu() {
        if (mobileNav) mobileNav.classList.remove('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
        body.classList.remove('mobile-menu-open');
        document.body.style.overflow = '';

        // Close all dropdowns
        mobileDropdownToggles.forEach(toggle => {
            const dropdown = toggle.parentElement;
            dropdown.classList.remove('active');
            const content = dropdown.querySelector('.mobile-dropdown-content');
            if (content) {
                content.style.display = 'none';
            }
        });

        // Update menu toggle icon
        if (mobileMenuToggle) {
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }

    function openMobileMenu() {
        if (mobileNav) mobileNav.classList.add('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.add('active');
        body.classList.add('mobile-menu-open');
        document.body.style.overflow = 'hidden';

        if (mobileMenuToggle) {
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        }
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (mobileNav.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Close mobile menu when clicking regular links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a:not(.mobile-dropdown-toggle)');
    mobileNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMobileMenu();
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && body.classList.contains('mobile-menu-open')) {
            closeMobileMenu();
        }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024 && body.classList.contains('mobile-menu-open')) {
            closeMobileMenu();
        }
    });

});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1 && href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Account for fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==================== HEADER SCROLL EFFECT ====================
let lastScroll = 0;
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            header.style.transform = 'translateY(0)';
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = '0 6px 40px rgba(0, 0, 0, 0.7)';
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        }

        lastScroll = currentScroll;
    });
}

// ==================== ACTIVE NAV LINK HIGHLIGHT ====================
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== SCROLL REVEAL ANIMATIONS ====================
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.value-card, .tour-card, .info-card, .testimonial, .stat');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('scroll-reveal', 'active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
scrollReveal(); // Initial check

// ==================== PARALLAX EFFECT FOR HERO ====================
window.addEventListener('scroll', function () {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==================== TOUR CARD TILT EFFECT (Desktop only) ====================
const tourCards = document.querySelectorAll('.tour-card');

if (window.innerWidth >= 768) {
    tourCards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ==================== DYNAMIC PARTICLE ANIMATION ====================
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';

    const backgroundAnimation = document.querySelector('.background-animation');
    if (backgroundAnimation) {
        backgroundAnimation.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 25000);
    }
}

// Create new particles periodically
if (window.innerWidth >= 768) { // Only on larger screens for performance
    setInterval(createParticle, 3000);
}

// ==================== BUTTON RIPPLE EFFECT ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ==================== COUNTER ANIMATION FOR STATS ====================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const strong = entry.target.querySelector('strong');
            const text = strong.textContent;

            // Extract number from text like "98%", "5,000+", "15+", "4.9/5"
            const numberMatch = text.match(/[\d,\.]+/);
            if (numberMatch) {
                const number = parseFloat(numberMatch[0].replace(',', ''));
                const suffix = text.replace(/[\d,\.]+/, '');

                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        strong.textContent = text;
                        clearInterval(timer);
                    } else {
                        if (text.includes(',')) {
                            strong.textContent = Math.floor(current).toLocaleString() + suffix;
                        } else if (text.includes('.')) {
                            strong.textContent = current.toFixed(1) + suffix;
                        } else {
                            strong.textContent = Math.floor(current) + suffix;
                        }
                    }
                }, 30);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    // Trigger initial scroll reveal
    setTimeout(() => {
        scrollReveal();
    }, 100);
});

// ==================== TOUCH DEVICE DETECTION ====================
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Disable hover effects on touch devices
if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}