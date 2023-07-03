export function borrar(lista) {
let claseimagen = [];
claseimagen = document.querySelectorAll(".imagenborrar");
let tabla = document.getElementById("tabla");
let index = Array.from(claseimagen).indexOf(event.target);
tabla.rows[index + 1].querySelector("#celdatabla").innerHTML = "";
lista.pop(index);  
tabla.rows[index + 1].remove();
}