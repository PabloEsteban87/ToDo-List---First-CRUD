import { ver } from "/js/ver.js";
import { mostrarTabla } from "/js/tablas.js";
import { modificar } from "/js/modificar.js";

export function agregar(lista) {
  document.addEventListener(
    "keydown",
    (event) => {
      const agregar = document.getElementById("agregar");
      let keyValue = event.key;

      if (keyValue == "Enter") {
        let valor = agregar.value;
        lista.push(valor);
        ver(lista);
        mostrarTabla(lista);
        modificar(lista);
        
      }
    },
    false
  );
  return lista;
}
