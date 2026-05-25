/**
 * Freastar Website JavaScript
 * Minimal JavaScript for mobile navigation and progressive enhancement
 */

(function() {
    'use strict';
    
    // Mobile Navigation Toggle
    function initMobileNavigation() {
        const navToggle = document.querySelector('.nav__toggle');
        const navMenu = document.querySelector('.nav__menu');
        
        if (!navToggle || !navMenu) return;
        
        navToggle.addEventListener('click', function() {
            const isOpen = navMenu.classList.contains('nav__menu--open');
            
            if (isOpen) {
                navMenu.classList.remove('nav__menu--open');
                navToggle.setAttribute('aria-expanded', 'false');
            } else {
                navMenu.classList.add('nav__menu--open');
                navToggle.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Close mobile menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('nav__menu--open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
            
            if (!isClickInside && navMenu.classList.contains('nav__menu--open')) {
                navMenu.classList.remove('nav__menu--open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('nav__menu--open')) {
                navMenu.classList.remove('nav__menu--open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
    }
    
    // Smooth scroll for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = link.getAttribute('href');
                
                // Skip if href is just "#"
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // Calculate offset for sticky header
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update focus for accessibility
                    target.focus({ preventScroll: true });
                }
            });
        });
    }
    
    // Form enhancement (for future use when form submission is enabled)
    function initFormEnhancements() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            const submitButton = form.querySelector('button[type="submit"]');
            
            if (submitButton && submitButton.disabled) {
                // Add visual indication that form is not yet functional
                const notice = form.querySelector('.form-notice');
                if (notice) {
                    notice.style.border = '2px solid #d97706';
                    notice.style.backgroundColor = '#fef3c7';
                }
            }
        });
    }
    
    // Card hover effects enhancement
    function initCardEffects() {
        const cards = document.querySelectorAll('.product-card, .feature-card');
        
        cards.forEach(function(card) {
            // Add keyboard focus support for card hover effects
            card.addEventListener('focusin', function() {
                card.style.transform = 'translateY(-4px)';
                card.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
            });
            
            card.addEventListener('focusout', function() {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });
    }
    
    // External link handling
    function initExternalLinks() {
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        
        externalLinks.forEach(function(link) {
            // Ensure external links have proper security attributes
            if (!link.hasAttribute('rel')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }
            
            // Add visual indicator for screen readers
            const text = link.textContent;
            if (!text.includes('(opens in new tab)')) {
                link.setAttribute('aria-label', text + ' (opens in new tab)');
            }
        });
    }
    
    // Performance optimization: lazy load non-critical assets
    function initLazyLoading() {
        // This is a placeholder for future image lazy loading if needed
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window && images.length > 0) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }
    
    // Initialize all functionality when DOM is ready
    function init() {
        initMobileNavigation();
        initSmoothScroll();
        initFormEnhancements();
        initCardEffects();
        initExternalLinks();
        initLazyLoading();
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Handle resize events for mobile nav
    window.addEventListener('resize', function() {
        const navMenu = document.querySelector('.nav__menu');
        const navToggle = document.querySelector('.nav__toggle');
        
        if (window.innerWidth >= 768 && navMenu && navToggle) {
            // Close mobile menu on desktop
            navMenu.classList.remove('nav__menu--open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Service worker registration (for future PWA features)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Uncomment when service worker is ready
            // navigator.serviceWorker.register('/sw.js').catch(function() {
            //     // Service worker registration failed - no problem
            // });
        });
    }
    
})();