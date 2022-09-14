document.addEventListener('DOMContentLoaded', function () {
    eventListener();
})

function eventListener() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive)
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar'); //Si no lo tiene lo agrega o lo quita
}