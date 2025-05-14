import {loadXMLDoc} from './moduloP2load.js'

document.getElementById ("btn").addEventListener ("click", cargar, false);

export function cargar() {
    loadXMLDoc()
}
