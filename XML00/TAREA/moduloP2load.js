
import {myFunction} from './moduloP2agregar.js'

export function loadXMLDoc() {
    if(document.getElementById("demo").innerHTML.length > 10){
        document.getElementById("demo").innerHTML = " "
    }else{
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            const xmlDoc = xhttp.responseXML;
            const cd = xmlDoc.getElementsByTagName("CD");
            myFunction(cd);
        }
        xhttp.open("GET", "cd_catalog.xml");
        xhttp.send();
    }
    
}