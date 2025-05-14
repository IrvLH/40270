import {Picture} from './moduloP6picture.js'

export function crear(){
    const p = document.getElementById("app")
    p.innerHTML = Picture(1) +Picture(2) + Picture(3)

    const lista = app.querySelectorAll('img')
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", ()=> {
            lista[i].classList.toggle("redonda")
        })
        
    }
}