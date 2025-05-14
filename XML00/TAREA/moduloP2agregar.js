export function myFunction(cd) {
    let table="<tr><th>Titulo</th><th>Artista</th><th>Año</th></tr>";
    for (let i = 0; i < cd.length; i++) {
    table += "<tr><td>" +
    cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>"+
    cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
    "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}