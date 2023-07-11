// Obtener el botón de menú y el menú de navegación
var menuToggle = document.getElementById('menu-toggle');
var navMenu = document.getElementById('nav-menu');

// Agregar un evento de clic al botón de menú
menuToggle.addEventListener('click', function() {
  // Alternar la clase 'show' en el menú de navegación
  navMenu.classList.toggle('show');
});
