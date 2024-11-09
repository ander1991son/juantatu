// Agregar evento de clic al botón del menú para alternar visibilidad
document.getElementById("menuButton").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show"); // Toggle para mostrar/ocultar el menú
});
