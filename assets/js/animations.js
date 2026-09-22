// Animations: IntersectionObserver for reveal, counters, parallax
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // Reveal on scroll
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      revealObserver.observe(el);
    });

    // Counter animation
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const startTime = performance.now();

          function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = window.formatCurrency(current) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

    // Hero parallax
    const hero = document.querySelector('.hero-bg');
    if (hero && window.innerWidth > 768) {
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.4;
            hero.style.backgroundPosition = `center calc(50% + ${rate}px)`;
            ticking = false;
          });
          ticking = true;
        }
      });
    }

    // Star rating animation
    document.querySelectorAll('.star-fill').forEach(el => {
      const rating = parseInt(el.dataset.rating || 0);
      const stars = el.querySelectorAll('span');
      stars.forEach((star, idx) => {
        if (idx < rating) {
          star.style.color = '#d4af37';
        }
      });
    });
  });
})();
