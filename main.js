import './style.scss'

window.addEventListener("load", () => {
    const nav = document.querySelector("nav")
    const menuButton = document.createElement("button")
    const ul = document.querySelector("nav ul")
    menuButton.addEventListener('click',()=>{
        ul.style.display = ul.style.display === "flex" ? "none" : "flex"
    })
    menuButton.innerText = "menu"
    nav.appendChild(menuButton)

})