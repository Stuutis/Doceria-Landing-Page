const menu = document.querySelector('.menuContainer')

let visible = false

function openMenu() {
    if (visible === false) {
        menu.style.display = 'block'
        visible = true
    } else {
        menu.style.display = 'none'
        visible = false
    }
}