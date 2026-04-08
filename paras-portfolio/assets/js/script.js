// Feature 1: Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.documentElement;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = '☀️ Light Mode';
    }
}

themeToggle.addEventListener('click', () => {
    let targetTheme = 'light';
    if (body.getAttribute('data-theme') !== 'dark') {
        targetTheme = 'dark';
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
    body.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
});

// Feature 2: Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});
