let textoColor = function() {
  let texto = document.getElementById("texto")
  texto.style.backgroundColor = "blue"
}

let main = function() {
  let butColor = document.getElementById("but_color")
  butColor.addEventListener("click", textoColor)
}

main()