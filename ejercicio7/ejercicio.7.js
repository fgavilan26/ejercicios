let eliminarTexto = function() {
  let lista = document.getElementById("lista")

  if(lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild)
  } else {
    console.log("Ya se eliminaron")
  }
}

let main = function() {
  let butEliminar = document.getElementById("but_eliminar")
  butEliminar.addEventListener("click", eliminarTexto)
}

main()