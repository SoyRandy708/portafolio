const menu = document.getElementById("menu")
const menuItems = document.querySelectorAll(".navegacion .item")
const header = document.querySelector("header")

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        header.classList.remove("mostrar-menu")
    })
})

menu.addEventListener("click", () => {
    header.classList.toggle("mostrar-menu")
})

const preferencia = window.matchMedia('(prefers-color-scheme: dark)').matches
const modoOscuro = document.querySelector(".modo-oscuro")
const circulo = document.querySelector(".modo-oscuro .circulo")
let darkMode = preferencia

if (darkMode) {
    circulo.classList.add("modo-color")
} else {
    circulo.classList.remove("modo-color")
}

const changeColors = () => {
    const root = document.querySelector(":root")
    circulo.classList.toggle("modo-color")
    darkMode = !darkMode

    if(darkMode) {
        root.style.setProperty("--background-one", "#0f0e17")
        root.style.setProperty("--background-two", "#146C94")
        root.style.setProperty("--background-three", "#854bac")
        root.style.setProperty("--color-one", "#F1F6F9")
    } else {
        root.style.setProperty("--background-one", "#ebffff")
        root.style.setProperty("--background-two", "#34e2e7")
        root.style.setProperty("--background-three", "#cce3e3")
        root.style.setProperty("--color-one", "#0f0e17")
    }
}

modoOscuro.addEventListener("click", changeColors)