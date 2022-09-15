const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const hamMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener('click', toggleDesktopMenu)
hamMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu(){
    let classes = desktopMenu.classList
    const inactive = classes.toggle('inactive') 
}
function toggleMobileMenu(){
    let classes = mobileMenu.classList
    const inactive = classes.toggle('inactive') 
}
