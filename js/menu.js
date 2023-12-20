const menu = document.getElementById("menu-icon")
const list = document.getElementById("list")

menu.addEventListener('click', () =>{
    list.classList.toggle('active')
})