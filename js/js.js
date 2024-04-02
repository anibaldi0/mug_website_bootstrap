function collapseNavbar() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
        navbarToggler.click();
    }
}
