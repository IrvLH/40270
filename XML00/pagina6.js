const Picture = (id) => {
    return `<figure>
                <img src="https://picsum.photos/id/${id}/200/200/" alt="imagen">
                <figcaption>Redondo</figcaption>
            </figure>`
}

const p = document.getElementById("app")
p.innerHTML = Picture(1) +Picture(2) + Picture(3)

const lista = app.querySelectorAll('img')
console.log(lista)
for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click", ()=> {
        lista[i].classList.toggle("redonda")
    })
    
}