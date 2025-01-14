// html elements (js objects)
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const hamMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')

const cardsContainer = document.querySelector('.cards-container')


// data de backend
// LISTA
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
    name: 'Computer',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
    name: 'Clock',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
    name: 'GPS',
    price: 330,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

// listeners
menuEmail.addEventListener('click', toggleDesktopMenu)
hamMenu.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)



renderProducts(productList)


// functions

// menu desktop
function toggleDesktopMenu(){
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isAsideMenuClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive') 
}

// menu mobile
function toggleMobileMenu(){
    closeProductDetailAside()
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isAsideMenuClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

// aside
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}



// pintar productos

/* <div class="product-card">
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="">
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
          </div> */
function renderProducts(arr){
    for(product of arr){

        // primero creamos los elementos y luego le agregamos propiedades
        // insertar los childs en el
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        // listener imagenes
        img.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.textContent = '$' + product.price
    
        const productName = document.createElement('p')
        productName.textContent = product.name
    
        productDiv.appendChild(productPrice)
        productDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
    
        productInfo.appendChild(productDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}


