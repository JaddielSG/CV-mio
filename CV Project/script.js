document.querySelectorAll('.testimonial').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('activo');
    });
});
