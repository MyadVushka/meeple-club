const hero = document.querySelector('.section-start')

hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const mouseX = (e.clientX - r.left) / r.width - 0.5;
    const mouseY = (e.clientY - r.top) / r.height - 0.5;
    hero.style.setProperty('--mx', mouseX);
    hero.style.setProperty('--my', mouseY);
});

hero.addEventListener('mouseleave', (e) => {
    hero.style.setProperty('--mx', 0);
    hero.style.setProperty('--my', 0);
})


