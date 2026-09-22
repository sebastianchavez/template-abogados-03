// Main JavaScript - Navbar, Mobile Menu, Routing, Form
(function() {
  'use strict';

  // Build navbar dynamically
  const data = window.MOCK_DATA;
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  function buildNavbar() {
    const navItems = data.nav.map(item => {
      const isActive = item.href === currentPath;
      return `<a href="${item.href}" class="nav-link ${isActive ? 'active' : ''} text-white hover:text-yellow-400 transition-colors">${item.label}</a>`;
    }).join('');

    return `
      <nav class="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="mainNav">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <a href="index.html" class="flex items-center gap-3 text-white">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center text-navy-dark font-bold text-xl shadow-lg">
                M
              </div>
              <div class="hidden md:block">
                <p class="font-serif text-lg leading-tight">Mendoza & Asociados</p>
                <p class="text-xs text-yellow-400 uppercase tracking-wider">Estudio Jurídico</p>
              </div>
            </a>

            <div class="hidden lg:flex items-center gap-8">
              ${navItems}
            </div>

            <div class="hidden lg:flex items-center gap-4">
              <a href="contact.html" class="btn-gold px-6 py-2.5 rounded-md text-sm">
                Consulta Gratis
              </a>
            </div>

            <button class="lg:hidden text-white p-2" id="menuBtn" aria-label="Abrir menú">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile menu -->
      <div class="fixed inset-0 z-[60] bg-black/70 hidden" id="menuOverlay"></div>
      <div class="mobile-menu fixed top-0 right-0 h-full w-80 max-w-full bg-navy-dark z-[70] shadow-2xl p-6 overflow-y-auto" id="mobileMenu">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-3 text-white">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center text-navy-dark font-bold">M</div>
            <p class="font-serif">Mendoza</p>
          </div>
          <button class="text-white" id="closeMenuBtn" aria-label="Cerrar menú">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="flex flex-col gap-4">
          ${data.nav.map(item => {
            const isActive = item.href === currentPath;
            return `<a href="${item.href}" class="text-white hover:text-yellow-400 transition-colors py-3 border-b border-white/10 ${isActive ? 'text-yellow-400' : ''}">${item.label}</a>`;
          }).join('')}
          <a href="contact.html" class="btn-gold mt-6 px-6 py-3 rounded-md text-center">Consulta Gratis</a>
        </div>
      </div>
    `;
  }

  // Build footer
  function buildFooter() {
    return `
      <footer class="bg-navy-dark text-white pt-16 pb-6 mt-20">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center text-navy-dark font-bold text-xl">M</div>
                <div>
                  <p class="font-serif text-xl">Mendoza & Asociados</p>
                  <p class="text-xs text-yellow-400 uppercase tracking-wider">Estudio Jurídico</p>
                </div>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">${data.firm.description}</p>
            </div>

            <div>
              <h4 class="font-serif text-xl mb-4 gold-line">Servicios</h4>
              <ul class="space-y-2 text-sm text-gray-300">
                ${data.services.slice(0, 6).map(s => `<li><a href="services.html" class="hover:text-yellow-400 transition-colors">${s.title}</a></li>`).join('')}
              </ul>
            </div>

            <div>
              <h4 class="font-serif text-xl mb-4 gold-line">Enlaces</h4>
              <ul class="space-y-2 text-sm text-gray-300">
                ${data.nav.map(n => `<li><a href="${n.href}" class="hover:text-yellow-400 transition-colors">${n.label}</a></li>`).join('')}
                <li><a href="privacy.html" class="hover:text-yellow-400 transition-colors">Privacidad</a></li>
                <li><a href="terms.html" class="hover:text-yellow-400 transition-colors">Términos</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-serif text-xl mb-4 gold-line">Contacto</h4>
              <ul class="space-y-3 text-sm text-gray-300">
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-1 flex-shrink-0 text-yellow-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>${data.firm.address}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <a href="tel:${data.firm.phone}" class="hover:text-yellow-400 transition-colors">${data.firm.phone}</a>
                </li>
                <li class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <a href="mailto:${data.firm.email}" class="hover:text-yellow-400 transition-colors">${data.firm.email}</a>
                </li>
              </ul>

              <div class="flex gap-3 mt-5">
                ${['facebook', 'twitter', 'linkedin', 'instagram'].map(s => `
                  <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow-500 hover:text-navy-dark transition-all flex items-center justify-center" aria-label="${s}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">${s[0].toUpperCase()}</text></svg>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="divider mb-6"></div>

          <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© <span id="year"></span> ${data.firm.name}. Todos los derechos reservados.</p>
            <p>Cédula profesional: 12345678 | RFC: MAD980115ABC</p>
          </div>
        </div>
      </footer>
    `;
  }

  // Inject navbar and footer
  document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('navbar');
    const footerPlaceholder = document.getElementById('footer');
    if (navPlaceholder) navPlaceholder.innerHTML = buildNavbar();
    if (footerPlaceholder) footerPlaceholder.innerHTML = buildFooter();

    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar scroll effect
    const nav = document.getElementById('mainNav');
    const handleScroll = () => {
      if (!nav) return;
      if (window.scrollY > 60) {
        nav.classList.add('navbar-scroll');
      } else {
        nav.classList.remove('navbar-scroll');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('menuOverlay');

    function openMenu() {
      if (overlay) overlay.classList.remove('hidden');
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      if (overlay) overlay.classList.add('hidden');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (menuBtn) menuBtn.addEventListener('click', openMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close mobile menu when clicking a link
    if (mobileMenu) {
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          if (window.innerWidth < 1024) closeMenu();
        });
      });
    }
  });

  // Smooth scroll for anchors
  document.addEventListener('click', e => {
    const target = e.target.closest('a[href^="#"]');
    if (target && target.getAttribute('href').length > 1) {
      const id = target.getAttribute('href').substring(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  });

  // Contact form handler (mock)
  window.handleContactSubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Validate
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
        field.classList.add('error');
        valid = false;
      } else {
        field.classList.remove('error');
      }
    });

    if (!valid) {
      setTimeout(() => {
        form.querySelectorAll('.form-input.error').forEach(el => el.classList.remove('error'));
      }, 2000);
      return;
    }

    // Mock submit
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    setTimeout(() => {
      const successEl = document.getElementById('formSuccess');
      if (successEl) {
        successEl.classList.remove('hidden');
        successEl.classList.add('animate-fade-in');
      }
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      setTimeout(() => {
        if (successEl) successEl.classList.add('hidden');
      }, 5000);
    }, 1200);
  };

  // Gallery lightbox
  window.openLightbox = function(src, alt) {
    let lb = document.getElementById('lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'lightbox';
      lb.className = 'lightbox fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-4';
      lb.innerHTML = `
        <button class="absolute top-6 right-6 text-white hover:text-yellow-400 transition" id="lbClose" aria-label="Cerrar">✕</button>
        <button class="absolute left-6 text-white hover:text-yellow-400 transition hidden md:block" id="lbPrev" aria-label="Anterior">‹</button>
        <button class="absolute right-6 text-white hover:text-yellow-400 transition hidden md:block" id="lbNext" aria-label="Siguiente">›</button>
        <img src="" alt="" class="max-w-full max-h-[90vh] rounded-lg shadow-2xl">
        <p class="absolute bottom-6 left-0 right-0 text-center text-white text-sm"></p>
      `;
      document.body.appendChild(lb);

      lb.querySelector('#lbClose').addEventListener('click', window.closeLightbox);
      lb.addEventListener('click', e => {
        if (e.target === lb) window.closeLightbox();
      });
    }

    const gallery = window.MOCK_DATA.gallery;
    let idx = gallery.findIndex(g => g.src === src);
    const update = (i) => {
      const item = gallery[i];
      lb.querySelector('img').src = item.src;
      lb.querySelector('img').alt = item.alt;
      lb.querySelector('p').textContent = item.alt + ' • ' + (i + 1) + ' / ' + gallery.length;
    };
    update(idx);

    lb.querySelector('#lbPrev').onclick = () => { idx = (idx - 1 + gallery.length) % gallery.length; update(idx); };
    lb.querySelector('#lbNext').onclick = () => { idx = (idx + 1) % gallery.length; update(idx); };

    lb.classList.add('open');
    document.body.style.overflow = 'hidden';

    window._lbKeyHandler = (e) => {
      if (e.key === 'Escape') window.closeLightbox();
      if (e.key === 'ArrowLeft') lb.querySelector('#lbPrev').click();
      if (e.key === 'ArrowRight') lb.querySelector('#lbNext').click();
    };
    document.addEventListener('keydown', window._lbKeyHandler);
  };

  window.closeLightbox = function() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
    if (window._lbKeyHandler) {
      document.removeEventListener('keydown', window._lbKeyHandler);
    }
  };
})();
