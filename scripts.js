window.addEventListener('load', () => {
const loader = document.getElementById('loading-screen');
const overlay = document.querySelector('.banner-overlay');
const title = document.querySelector('.banner-title');
const subtitle = document.querySelector('.banner-subtitle');

setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
    loader.style.display = 'none';

    // Banner titles
    overlay.classList.add('show');
    title.classList.add('show');
    subtitle.classList.add('show');

    // Agora iniciar observer para as sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // opcional: para não ficar sempre a disparar
        }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section-reveal').forEach(section => {
        observer.observe(section);
    });

    }, 500);
}, 1500);
});
  
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScrollTop) {
    header.style.top = "-100px"; // esconde
    } else {
    header.style.top = "0"; // mostra
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    // Fade in texto
    const trigger = document.getElementById('scroll-section');
    const headline = document.getElementById('headline');
    const subheadline = document.getElementById('subheadline');
    if (currentScroll + window.innerHeight > trigger.offsetTop + 100) {
    headline.classList.add('visible');
    subheadline.classList.add('visible');
    }

    // Movimento horizontal do texto
    const scrollText = document.getElementById('scrollText');
    scrollText.style.transform = `translateX(${currentScroll * -0.5}px)`;
});

// Parallax banner
window.addEventListener('scroll', () => {
    const banner = document.getElementById('banner');
    const offset = window.scrollY;
    banner.style.backgroundPositionY = `${offset * 0.5}px`;
});
window.addEventListener('scroll', () => {
const scrollText = document.getElementById('scrollText');
if (scrollText) {
    const scrollAmount = window.scrollY;
    scrollText.style.transform = `translateX(${scrollAmount * -0.5}px)`;
}
});
// MENU MOBILE TOGGLE
const menuToggle = document.getElementById('menu-toggle');
const menuWrapper = document.getElementById('menu-wrapper');
const headerToggle = document.getElementById('header');

menuToggle.addEventListener('click', () => {
  const isOpen = menuWrapper.classList.toggle('show');
  menuToggle.classList.toggle('active');

  if (isOpen) {
    headerToggle.style.background = 'black';
  } else {
    headerToggle.style.background = 'transparent';
  }
});

// Fecha menu mobile ao clicar em qualquer link do menu
document.querySelectorAll('#menu-wrapper .menu a').forEach(link => {
  link.addEventListener('click', () => {
    // Só fecha se o menu estiver aberto (mobile)
    if (menuWrapper.classList.contains('show')) {
      menuWrapper.classList.remove('show');
      menuToggle.classList.remove('active');
      headerToggle.style.background = 'transparent';
    }
  });
});
// MENU MOBILE TOGGLE