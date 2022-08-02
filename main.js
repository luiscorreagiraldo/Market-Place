const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const hamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");





menuEmail.addEventListener("click", toggleDesktopMenu);
hamburger.addEventListener("click", toggleMobileMenu);





function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

function hola () {
  console.log('hola')
}