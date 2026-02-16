// script navbar start


        // Hamburger Menu Toggle
        const ham_burger = document.getElementById('ham_burger');
        const nav_Menu = document.getElementById('nav_Menu');

        ham_burger.addEventListener('click', () => {
            ham_burger.classList.toggle('active');
            nav_Menu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const nav_Links = document.querySelectorAll('.nav-menu a');
        nav_Links.forEach(link => {
            link.addEventListener('click', () => {
                ham_burger.classList.remove('active');
                nav_Menu.classList.remove('active');
            });
        });

        // Active link highlighting
        nav_Links.forEach(link => {
            link.addEventListener('click', (e) => {
                nav_Links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Close menu when clicking outside (اختياري - لتحسين تجربة المستخدم)
        document.addEventListener('click', (e) => {
            if (!ham_burger.contains(e.target) && !nav_Menu.contains(e.target)) {
                ham_burger.classList.remove('active');
                nav_Menu.classList.remove('active');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                ham_burger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    

 // script navbar end
 // script Who We Are Section start
 
        // Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Active link highlighting
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Smooth scroll animation on page load
        window.addEventListener('load', () => {
            const elements = document.querySelectorAll('.animate-fade-in-up, .animate-scale-in, .animate-slide-in-right');
            elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = el.classList.contains('animate-scale-in') ? 'scale(0.95)' :
                    el.classList.contains('animate-slide-in-right') ? 'translateX(50px)' :
                        'translateY(30px)';
            });
        });

        // Contact button actions
        const contactBtns = document.querySelectorAll('.contact-btn, .btn-primary');
        contactBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Contact form would open here!');
            });
        });

        // Schedule button action
        const scheduleBtn = document.querySelector('.btn-secondary');
        if (scheduleBtn) {
            scheduleBtn.addEventListener('click', () => {
                alert('Schedule cleaning form would open here!');
            });
        }

        // More About Us button
        const moreAboutBtn = document.querySelector('.more-about-btn');
        if (moreAboutBtn) {
            moreAboutBtn.addEventListener('click', () => {
                alert('More about us page would open here!');
            });
        }

        // Service card arrows
        const serviceArrows = document.querySelectorAll('.service-arrow');
        serviceArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                alert('Service details would open here!');
            });
        });

        // Intersection Observer for animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card, .stat-box, .satisfaction-badge, .more-about-btn').forEach(el => {
            observer.observe(el);
        });
// script Who We Are Section end
// script Services Section start


        // Scroll Animation Observer
        const observer_Options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, observer_Options);

        // Observe all scroll-animate elements
        document.querySelectorAll('.scroll-animate').forEach(el => {
            scrollObserver.observe(el);
        });

        // Service Arrow Click Handler
      

        // Service Item Click Handler
       

        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Optional: Add parallax effect on scroll
        window.addEventListener('scroll', () => {
            const section = document.querySelector('.services-section');
            const scrollPosition = window.pageYOffset;

            const beforeElement = document.querySelector('.services-section::before');
            const afterElement = document.querySelector('.services-section::after');

            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const windowHeight = window.innerHeight;

                // Calculate if section is in view
                if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const parallaxOffset = (scrollPosition - sectionTop) * 0.5;
                    section.style.backgroundPosition = `0 ${parallaxOffset}px`;
                }
            }
        });
  
// script Services Section end
// script Why Choose Us Section start

        // Scroll Animation Observer
        const observer_options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const scroll_Observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    scroll_Observer.unobserve(entry.target);
                }
            });
        }, observer_options);

        // Observe all scroll-animate elements
        document.querySelectorAll('.scroll-animate').forEach(el => {
            scroll_Observer.observe(el);
        });

        // Button Click Handlers
        const contact_Btns = document.querySelectorAll('.btn-primary-trusted, .btn-secondary-trusted');
        contact_Btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const btnText = btn.textContent.trim().split('\n')[0];
                alert(`${btnText} button clicked!`);
            });
        });

        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Optional: Add parallax effect on scroll
        window.addEventListener('scroll', () => {
            const trustedSection = document.querySelector('.trusted-section');
            const whyChooseSection = document.querySelector('.why-choose-section');
            const scrollPosition = window.pageYOffset;

            // Parallax for trusted section
            if (trustedSection) {
                const sectionTop = trustedSection.offsetTop;
                const sectionHeight = trustedSection.offsetHeight;
                const windowHeight = window.innerHeight;

                if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const parallaxOffset = (scrollPosition - sectionTop) * 0.3;
                    trustedSection.style.backgroundPosition = `0 ${parallaxOffset}px`;
                }
            }

            // Parallax for why choose section
            if (whyChooseSection) {
                const sectionTop = whyChooseSection.offsetTop;
                const sectionHeight = whyChooseSection.offsetHeight;
                const windowHeight = window.innerHeight;

                if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const parallaxOffset = (scrollPosition - sectionTop) * 0.3;
                    whyChooseSection.style.backgroundPosition = `0 ${parallaxOffset}px`;
                }
            }
        });
  
// script Why Choose Us Section end
// script FAQ Questions Section start

    // Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Create observer for cards animation on scroll
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element is visible
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation to children
                const cards = entry.target.querySelectorAll('.question-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                // Animate header
                const header = entry.target.querySelector('.inquiries-header');
                if (header) {
                    setTimeout(() => {
                        header.style.opacity = '1';
                        header.style.transform = 'translateY(0)';
                    }, 300);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe the section
    const faqSection = document.querySelector('.inquiries-section');
    if (faqSection) {
        animationObserver.observe(faqSection);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects
    const questionLinks = document.querySelectorAll('.question-link a');
    questionLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(-10deg)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });
});

// Optional: Add parallax effect on scroll
window.addEventListener('scroll', function() {
    const section = document.querySelector('.inquiries-section');
    if (section) {
        const scrollPosition = window.pageYOffset;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition + windowHeight > sectionTop && 
            scrollPosition < sectionTop + sectionHeight) {
            const offset = (scrollPosition - sectionTop) * 0.1;
            section.style.backgroundPosition = `0 ${offset}px`;
        }
    }
});


// script FAQ Questions Section end

 

// script Price Section start

        // Intersection Observer للتحكم في ظهور العناصر عند التمرير
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        
                        // إعادة تشغيل أنيميشن الكروت
                        const cards = entry.target.querySelectorAll('.pricing-card-new');
                        cards.forEach((card, index) => {
                            card.style.animation = 'none';
                            card.offsetHeight; // إعادة تعيين
                            card.style.animation = `fadeUp 0.6s ease forwards`;
                            card.style.animationDelay = `${index * 0.1}s`;
                        });
                    }
                });
            }, { threshold: 0.1 });

            const section = document.querySelector('.pricing-section-new');
            if (section) {
                observer.observe(section);
            }

            // تأثيرات hover للكروت
            const cards = document.querySelectorAll('.pricing-card-new');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // تأثيرات للمميزات
            const features = document.querySelectorAll('.feature-item-new');
            features.forEach(feature => {
                feature.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                feature.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // إضافة تأثير النبض للأزرار
            const helpButtons = document.querySelectorAll('.help-phone-new, .help-wa-new');
            helpButtons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });

        // إضافة تأثيرات parallax بسيطة
        window.addEventListener('scroll', function() {
            const section = document.querySelector('.pricing-section-new');
            if (section) {
                const scrollY = window.scrollY;
                const dots = document.querySelectorAll('.decor-dot-new');
                dots.forEach((dot, index) => {
                    const speed = 0.05 * (index + 1);
                    dot.style.transform = `translateY(${scrollY * speed}px)`;
                });
            }
        });
// script Price Section end
// script Our Working Process Section start

    // Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    // Create observer for process steps
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate progress bars
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe process steps
    document.querySelectorAll('.process-step').forEach(step => {
        stepObserver.observe(step);
    });

    // Observe process info
    const processInfo = document.querySelector('.process-info');
    if (processInfo) {
        stepObserver.observe(processInfo);
    }

    // Counter animation for numbers
    const counters = document.querySelectorAll('.progress-label span:last-child');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.round(current) + '%';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '%';
            }
        };
        
        // Start counter when element is visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counterObserver.observe(counter);
    });

    // Hover effect for steps
    const steps = document.querySelectorAll('.process-step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            const number = this.querySelector('.step-number');
            number.style.transform = 'scale(1.1)';
        });
        
        step.addEventListener('mouseleave', function() {
            const number = this.querySelector('.step-number');
            number.style.transform = 'scale(1)';
        });
    });

    // Parallax effect for decoration
    window.addEventListener('scroll', () => {
        const decoration = document.querySelector('.decoration-circle');
        const dots = document.querySelector('.decoration-dots');
        const scrollY = window.scrollY;
        
        if (decoration) {
            decoration.style.transform = `rotate(${scrollY * 0.1}deg)`;
        }
        
        if (dots) {
            dots.style.transform = `translate(${scrollY * 0.05}px, ${scrollY * 0.05}px)`;
        }
    });

    // Tooltip effect for features
    const features = document.querySelectorAll('.info-feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            const indicator = this.querySelector('.feature-indicator');
            indicator.style.transform = 'scale(1.5)';
            indicator.style.boxShadow = '0 0 0 4px rgba(251, 191, 36, 0.3)';
        });
        
        feature.addEventListener('mouseleave', function() {
            const indicator = this.querySelector('.feature-indicator');
            indicator.style.transform = 'scale(1)';
            indicator.style.boxShadow = '0 0 0 2px rgba(251, 191, 36, 0.3)';
        });
    });
});

// Add CSS for animation states
const style = document.createElement('style');
style.textContent = `
    .process-step {
        opacity: 0;
        transform: translateX(50px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .process-step.animate-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .process-info {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
    }
    
    .process-info.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .process-step:nth-child(1) { transition-delay: 0.1s; }
    .process-step:nth-child(2) { transition-delay: 0.2s; }
    .process-step:nth-child(3) { transition-delay: 0.3s; }
    .process-step:nth-child(4) { transition-delay: 0.4s; }
    
    .progress-fill {
        transition: width 1.5s ease-out;
    }
`;
document.head.appendChild(style);


// script Our Working Process Section end
// script Testimonials Section start

        document.addEventListener('DOMContentLoaded', function() {
            // Intersection Observer لإعادة تشغيل الأنيميشن عند التمرير
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.testimonial-card');
                        cards.forEach((card, index) => {
                            card.style.animation = 'none';
                            card.offsetHeight; // إعادة تعيين
                            card.style.animation = `slideUp 0.6s ease forwards`;
                            card.style.animationDelay = `${index * 0.1}s`;
                        });
                    }
                });
            }, { threshold: 0.2 });

            const section = document.querySelector('.testimonials-section');
            if (section) {
                observer.observe(section);
            }

            // تأثيرات hover للبطاقات
            const cards = document.querySelectorAll('.testimonial-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // عداد بسيط للأرقام (تأثير بصري)
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('+') || text.includes('.')) {
                    // نتركها كما هي
                }
            });

            // تأثيرات للأزرار
            const inviteButtons = document.querySelectorAll('.invite-wa, .invite-call');
            inviteButtons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });

        // تأثير parallax بسيط للعناصر الزخرفية
        window.addEventListener('scroll', function() {
            const dots = document.querySelectorAll('.testi-dots span');
            const scrollY = window.scrollY;
            
            dots.forEach((dot, index) => {
                const speed = 0.1 * (index + 1);
                dot.style.transform = `translateY(${scrollY * speed}px)`;
            });
        });
   
// script Testimonials Section end


