let menu = document.querySelector('.hamburger-menu')
let navbar = document.querySelector('.navbar')

menu.onClick = () => {
    menu.classList.toggle('hamburger-menu')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.toggle('.hamburger-menu')
    navbar.classList.toggle('.navbar')
}