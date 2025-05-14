import {imprime} from './moduloP1imprimir.js'

export function loadTXTDoc() {
      console.log("iniciando lectura")
      const xhttp = new XMLHttpRequest();
      console.log(xhttp)
      xhttp.onload = function () {
        const xmlDoc = xhttp.responseText;
        console.log(xmlDoc)
        // const cd = xmlDoc.getElementsByTagName("CD");
        // console.log(cd)
        // myFunction(cd);
        imprime(xmlDoc)
        console.log(xhttp)
      }
      xhttp.open("GET", "personas.txt");
      xhttp.send();
      console.log("saliendo de lectura")
}