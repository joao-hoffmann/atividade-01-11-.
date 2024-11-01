let listaCompras = [];

listaCompras.push("arroz");
listaCompras.push("feijão");
listaCompras.push("pão");

if (listaCompras[listaCompras.length - 1].toLowerCase() !== "leite") {
  listaCompras.push("leite");
}
console.log("Lista de Compras:", listaCompras);
