function agregar(lista) {
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
      }
    },
    false
  );
  return lista;
}

function ver(lista) {
  const ver = document.getElementById("ver");
  let longitudArray = Object.keys(lista).length;
  let recogervalor = lista[longitudArray - 1];
  ver.value = recogervalor;
}

function modificar(lista) {
  window.onload = (event) => {
    document.getElementById("modificar").addEventListener(
      "click",
      (event) => {
        console.log("Hola");
        const ver = document.getElementById("ver");
        let valor = ver.value;
        lista.pop();
        lista.push(valor);
        ver.value = valor;
      },
      false
    );
  };
}

function borrartabla(){
/*   window.onload = (event) => { */
  let borrartabla = document.querySelector('#cuerpotabla');
  borrartabla.remove();
}

function creacionTabla(lista){
  let th = document.createElement("tr");
  let celdath = document.createElement("td");
  celdath.textContent = "ToDo";
  let celdath2 = document.createElement("td");
  celdath2.textContent = "Options";
  th.appendChild(celdath);
  th.appendChild(celdath2);
  tabla.appendChild(th);
   let tbody = document.createElement("tbody");
   tbody.setAttribute('id', "cuerpotabla");
   tabla.appendChild(tbody);
   for (let i = 0; i <= lista.length - 1; i++) {
      let tr = document.createElement("tr");
      tbody.appendChild(tr);   
      let celda = document.createElement("td");
      celda.textContent = lista[i];
      celda.style.border = "1px solid";
      tr.appendChild(celda);
      let celda2 = document.createElement("td");
      let imagen2 = document.createElement("img");
      imagen2.setAttribute("src", "images/modificar.png");
      celda2.appendChild(imagen2);
      let imagen3 = document.createElement("img");
      imagen3.setAttribute("src", "images/borrar.png");
      celda2.appendChild(imagen3);
       tr.appendChild(celda2);
     /*  celda2.appendChild(tr);  */
      
      

    }
    /*   tbody.appendChild(tr);    */
    

   

  document.getElementById("contenedor-mostrar").appendChild(tabla);
}



function mostrarTabla(lista) {
/*   window.onload = (event) => {   */
  let tabla = document.getElementById("tabla");
  console.log(tabla);
  if(tabla.rows.length > 0){ 
    borrartabla();
    creacionTabla(lista);
    
 } 

 else{ 
  creacionTabla(lista);
} /* }; */}

let lista = [];

agregar(lista);
modificar(lista);



