let elementoLista = function() {
  let lista = document.createElement("li")
  lista.innerText = "Nuevo Elemento"

  let elemento = document.getElementById("elemento")
  elemento.appendChild(lista)
}

let main = function() {
  let butAñadir = document.getElementById("but_añadir")
  butAñadir.addEventListener("click", elementoLista)
}

main()