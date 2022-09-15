// html elements (js objects)
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const hamMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

// listeners
menuEmail.addEventListener('click', toggleDesktopMenu)
hamMenu.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleCarritoAside)



// functions

// menu desktop
function toggleDesktopMenu(){
    const isAsideMenuClosed = aside.classList.contains('inactive')
    if(!isAsideMenuClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive') 
}

// menu mobile
function toggleMobileMenu(){
    const isAsideMenuClosed = aside.classList.contains('inactive')
    if(!isAsideMenuClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

// aside
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}
