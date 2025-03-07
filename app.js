const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const menuItem = document.querySelector('.navbar__item')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

menuItem.addEventListener('click', function() {
    console.log("clicked the item")
})