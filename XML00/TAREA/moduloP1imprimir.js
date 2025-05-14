export function imprime(array) {
      let table = "<tr><th>Nombre</th><th>Apellido</th></tr>";
      let persona = ""
      for (let index = 0; index < array.length; index++) {
        if (index == 0)
          persona = "<tr><td>"
        if (array[index] == "\n") {
          persona += "</td></tr>"
          table += persona
          persona = "<tr><td>"
        }
        if (array[index] == " ") {
          persona += "</td><td>"
        }
        persona += array[index]
      }
      document.getElementById("demo").innerHTML = table;
}