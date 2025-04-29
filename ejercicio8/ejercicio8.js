let textOculto = function() {
  let texto = document.getElementById("texto")
  if(texto.style.display == "none") {
    texto.style.display = "block"
  } else {
    texto.style.display = "none"
  }
}

let main = function() {
  let butMO = document.getElementById("but_mo")
  butMO.addEventListener("click", textOculto)
}

main()