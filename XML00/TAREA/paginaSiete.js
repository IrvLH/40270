import {muestra} from './moduloP7mostrar.js'

const boton = document.getElementById("boton")

boton.addEventListener("click", ()=>{
    let user = document.getElementById("Email")
    let contra = document.getElementById("Pass")

    user.setAttribute("name", "jaksjel")
    contra.setAttribute("name", "ldsaw")

    muestra()

    
    let formulario = document.getElementsByTagName("form")
    formulario[0].setAttribute("action", "https://www.google.com/search")
    formulario[0].submit()
})