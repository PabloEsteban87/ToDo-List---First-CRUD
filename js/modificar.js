export function modificar(lista) {
  document.getElementById("modificar").addEventListener(
    "click",
    (event) => {
      const ver = document.getElementById("ver");
      let valor = ver.value;
      let tabla = document.getElementById("tabla");
      let ultimafila = tabla.rows.length - 1;
      lista.pop();
      lista[ultimafila - 1] = valor;
      tabla.rows[ultimafila].querySelector("#celdatabla").innerHTML = valor;
    },
    false
  );
}

export function modificarboton(lista) {
  let claseimagen = [];
  claseimagen = document.querySelectorAll(".imagenmodificar");
  let tabla = document.getElementById("tabla");
  let index = Array.from(claseimagen).indexOf(event.target);
  let valorAnterior = lista[index];
  let valor = prompt("Modificar: ", valorAnterior);
  lista[index] = valor;
  tabla.rows[index + 1].querySelector("#celdatabla").innerHTML = valor;
}
