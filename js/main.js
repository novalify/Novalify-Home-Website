// Initialize AOS
AOS.init({
    duration: 800,
    mirror: true,
});

// Parallax Footer Logic
const footer = document.querySelector('footer');
const main = document.querySelector('main');

function updateFooterParallax() {
    if (footer && main) {
        if (window.innerWidth >= 1024) {
            const footerHeight = footer.offsetHeight;
            main.style.marginBottom = `${footerHeight}px`;
        } else {
            main.style.marginBottom = '0';
        }
    }
}

window.addEventListener('resize', updateFooterParallax);
window.addEventListener('load', updateFooterParallax);
// Run immediately to prevent layout jump
updateFooterParallax();

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Back to Top Logic
const backToTopBtn = document.getElementById('back-to-top');

function toggleBackToTop() {
    if (!backToTopBtn) return;

    // Calculate 20% of the entire page height
    const limit = document.documentElement.scrollHeight * 0.20;

    if (window.scrollY >= limit) {
        backToTopBtn.classList.remove('translate-y-24', 'opacity-0');
    } else {
        backToTopBtn.classList.add('translate-y-24', 'opacity-0');
    }
}

if (backToTopBtn) {
    window.addEventListener('scroll', toggleBackToTop);
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
