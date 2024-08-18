const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('move');
    navbar.classList.toggle('open-menu');
});
