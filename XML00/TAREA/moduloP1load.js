import {myFunction} from './moduloP2agregar.js'

export function loadXMLDoc() {
      console.log("iniciando lectura")
      const xhttp = new XMLHttpRequest();
      console.log(xhttp)
      xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        console.log(xmlDoc)
        const cd = xmlDoc.getElementsByTagName("CD");
        console.log(cd)
        myFunction(cd);
        console.log(xhttp)
      }
      xhttp.open("GET", "https://www.w3schools.com/js/cd_catalog.xml");
      xhttp.send();
      console.log("saliendo de lectura")
}