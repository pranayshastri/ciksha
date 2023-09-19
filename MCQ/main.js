// Get references to the menu toggle button and the menu itself
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Toggle the "active" class on the menu when the menu toggle button is clicked
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

