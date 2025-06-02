window.addEventListener('load', () => {
const loader = document.getElementById('loading-screen');
const content = document.getElementById('main-content');

setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
    loader.style.display = 'none';
    content.style.display = 'block';
    }, 500);
}, 1500); // tempo total do loading em ms
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