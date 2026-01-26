// Writer Portfolio - JavaScript
// Minimal interactions for navigation and smooth enhancements

document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');

            // Toggle aria-expanded for accessibility
            const isExpanded = mainNav.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);

            // Change icon
            mobileMenuToggle.textContent = isExpanded ? '✕' : '☰';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.main-nav') &&
                !event.target.closest('.mobile-menu-toggle') &&
                mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.textContent = '☰';
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignore empty anchors
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll for content cards (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all content cards for fade-in animation
    document.querySelectorAll('.content-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Reading progress indicator (for article pages)
    const article = document.querySelector('.article-content');

    if (article) {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: var(--color-accent);
      z-index: 9999;
      transition: width 0.1s ease;
    `;
        document.body.appendChild(progressBar);

        // Update progress on scroll
        window.addEventListener('scroll', function () {
            const articleRect = article.getBoundingClientRect();
            const articleHeight = article.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrolled = window.pageYOffset;

            // Calculate reading progress
            const articleTop = article.offsetTop;
            const articleBottom = articleTop + articleHeight;
            const progress = ((scrolled - articleTop + windowHeight) / (articleHeight + windowHeight)) * 100;

            // Update progress bar width
            if (scrolled >= articleTop && scrolled <= articleBottom) {
                progressBar.style.width = Math.min(Math.max(progress, 0), 100) + '%';
            } else if (scrolled < articleTop) {
                progressBar.style.width = '0%';
            } else {
                progressBar.style.width = '100%';
            }
        });
    }

    // Console message for developers
    console.log('%cWriter\'s Portfolio', 'font-size: 20px; font-weight: bold; color: #2c5f8d;');
    console.log('%cClean, minimal design for thoughtful writing.', 'font-size: 12px; color: #7a7a7a;');
});
