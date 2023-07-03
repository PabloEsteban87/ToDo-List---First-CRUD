export function ver(lista) {
  const ver = document.getElementById("ver");
  let longitudArray = Object.keys(lista).length;
  let recogervalor = lista[longitudArray - 1];
  ver.value = recogervalor;
}
