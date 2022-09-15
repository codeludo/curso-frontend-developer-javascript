const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    let classes = desktopMenu.classList
    const inactive = classes.toggle('inactive') 
}
