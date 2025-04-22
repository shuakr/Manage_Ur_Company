const Staff = document.getElementById('Staff');
const navMenu = document.getElementById('nav-menu');

Staff.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});