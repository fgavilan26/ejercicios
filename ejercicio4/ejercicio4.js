let cambiarTexto = function() {
  let texto = document.getElementById("texto")
  texto.innerText = "Texto modificado"
}

let main = function() {
  let butCambiar = document.getElementById("but_cambiar")
  butCambiar.addEventListener("click", cambiarTexto)
}

main()