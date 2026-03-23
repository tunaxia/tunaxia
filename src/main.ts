import './style.css'

const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark');
}

themeToggle?.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  body.classList.remove(isDark ? 'dark' : 'light');
  body.classList.add(isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

const hero = document.querySelector('#hero');
const glow = document.querySelector('.glow');

hero?.addEventListener('mousemove', (e: any) => {
  if (!glow) return;
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;
  
  const moveX = (clientX - innerWidth / 2) / 25;
  const moveY = (clientY - innerHeight / 2) / 25;
  
  (glow as HTMLElement).style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
});
