const navToggle = document.querySelector(".nav-toggle") // Este script cumple la función del menu de hamburguesa
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});