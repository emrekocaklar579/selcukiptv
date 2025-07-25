// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // If the clicked item wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form form');
const formBtn = document.querySelector('.form-btn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const package = formData.get('package');
        
        // Simulate form submission
        formBtn.textContent = 'Gönderiliyor...';
        formBtn.disabled = true;
        
        setTimeout(() => {
            alert(`Teşekkürler ${name}! Talebiniz alınmıştır. Seçtiğiniz ${package} paketi için en kısa sürede tarafınızla iletişime geçeceğiz.`);
            
            // Reset form
            this.reset();
            formBtn.textContent = 'Ücretsiz Deneme Başlat';
            formBtn.disabled = false;
        }, 2000);
    });
}

// Animate on Scroll (Simple version)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .package-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(79, 70, 229, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#4F46E5';
        header.style.backdropFilter = 'none';
    }
});

// Price Animation
const priceElements = document.querySelectorAll('.new-price');
priceElements.forEach(price => {
    const finalPrice = parseInt(price.textContent);
    let currentPrice = 0;
    const increment = finalPrice / 50;
    
    const animatePrice = () => {
        currentPrice += increment;
        if (currentPrice < finalPrice) {
            price.textContent = Math.round(currentPrice) + ' TL';
            requestAnimationFrame(animatePrice);
        } else {
            price.textContent = finalPrice + ' TL';
        }
    };
    
    // Start animation when element is visible
    const priceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatePrice();
                priceObserver.unobserve(entry.target);
            }
        });
    });
    
    priceObserver.observe(price);
});

// Contact Method Click Handlers
document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('click', function() {
        const icon = this.querySelector('i');
        const text = this.querySelector('p').textContent;
        
        if (icon.classList.contains('fa-whatsapp')) {
            window.open(`https://wa.me/${text.replace(/\s/g, '')}`, '_blank');
        } else if (icon.classList.contains('fa-telegram')) {
            window.open(`https://t.me/${text.replace('@', '')}`, '_blank');
        } else if (icon.classList.contains('fa-phone')) {
            window.location.href = `tel:${text}`;
        }
    });
});

// Add hover effects for better accessibility
document.querySelectorAll('button, .btn-primary, .btn-secondary, .nav-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
});

console.log('Selçuk IPTV Website Loaded Successfully! 🚀');
