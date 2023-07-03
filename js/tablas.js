import { modificarboton } from "/js/modificar.js";
import { borrar } from "/js/borrar.js";

function creacionTabla(lista) {
  let thead = document.createElement("thead");
  thead.setAttribute("id", "headtabla");
  tabla.appendChild(thead);
  let th = document.createElement("tr");
  let celdath = document.createElement("td");
  celdath.textContent = "ToDo";
  let celdath2 = document.createElement("td");
  celdath2.textContent = "Options";
  th.appendChild(celdath);
  th.appendChild(celdath2);
  thead.appendChild(th);
  let tbody = document.createElement("tbody");
  tbody.setAttribute("id", "cuerpotabla");
  tabla.appendChild(tbody);
  for (let i = 0; i <= lista.length - 1; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let celda = document.createElement("td");
    celda.setAttribute("id", "celdatabla");
    celda.textContent = lista[i];
    tr.appendChild(celda);
    let celda2 = document.createElement("td");
    let imagen2 = document.createElement("img");
    imagen2.setAttribute("src", "images/modificar.png");
    imagen2.setAttribute("class", "imagenmodificar");
    imagen2.setAttribute("id", "imagenmodificar");
    imagen2.addEventListener("click", function (event) {
      modificarboton(lista);
    });
    celda2.appendChild(imagen2);
    let imagen3 = document.createElement("img");
    imagen3.setAttribute("src", "images/borrar.png");
    imagen3.setAttribute("class", "imagenborrar");
    imagen3.setAttribute("id", "imagenborrar");
    imagen3.addEventListener("click", function (event) {
      borrar(lista);
    });
    celda2.appendChild(imagen3);
    tr.appendChild(celda2);
  }

  document.getElementById("contenedor-mostrar").appendChild(tabla);
}

function borrartabla() {
  let borrartabla = document.querySelector("#cuerpotabla");
  let borrarcabecera = document.querySelector("#headtabla");
  borrartabla.remove();
  borrarcabecera.remove();
}

export function mostrarTabla(lista) {
  let tabla = document.getElementById("tabla");
  if (tabla.rows.length > 0) {
    borrartabla();
    creacionTabla(lista);
  } else {
    creacionTabla(lista);
  }
}
