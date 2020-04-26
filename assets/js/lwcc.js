function toggleMenu(){
    debugger
    document.querySelectorAll('.lwcc-navbar-responsive').forEach(item => {
        item.classList.toggle('display-mobile-menu');
    });

}